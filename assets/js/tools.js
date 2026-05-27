(function () {
  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function formatNumber(value, digits) {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: digits,
      minimumFractionDigits: digits || 0,
    }).format(value);
  }

  function formatDuration(totalSeconds) {
    var rounded = Math.round(totalSeconds);
    var hours = Math.floor(rounded / 3600);
    var minutes = Math.floor((rounded % 3600) / 60);
    var seconds = rounded % 60;

    if (hours > 0) {
      return hours + ":" + pad(minutes) + ":" + pad(seconds);
    }

    return minutes + ":" + pad(seconds);
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function setBarWidth(el, percent) {
    if (el) {
      el.style.width = clamp(percent, 0, 100) + "%";
    }
  }

  function setPill(el, text, state) {
    if (!el) {
      return;
    }

    el.textContent = text;
    el.setAttribute("data-state", state);
  }

  function initMileagePage() {
    var root = document.querySelector(".tools-mileage-page");

    if (!root) {
      return;
    }

    var now = new Date();
    var year = now.getFullYear();
    var msPerDay = 24 * 60 * 60 * 1000;
    var startUtc = Date.UTC(year, 0, 1);
    var todayUtc = Date.UTC(year, now.getMonth(), now.getDate());
    var endUtc = Date.UTC(year, 11, 31);
    var daysInYear = Math.floor((endUtc - startUtc) / msPerDay) + 1;
    var dayOfYear = Math.floor((todayUtc - startUtc) / msPerDay) + 1;
    var yearProgress = dayOfYear / daysInYear;
    var daysRemaining = Math.max(daysInYear - dayOfYear, 0);
    var weeksRemaining = daysRemaining / 7;
    var runUnits = {
      mi: { label: "miles", short: "mi", factor: 1 },
      km: { label: "kilometers", short: "km", factor: 1.60934 }
    };
    var defaults = {
      runCurrent: 0,
      runTarget: 1000,
      runUnit: "mi",
      driveCurrent: 0,
      driveTarget: 10000
    };
    var storageKey = "seb-tools-mileage-" + year;

    var els = {
      today: document.getElementById("tools-mileage-today"),
      yearProgress: document.getElementById("tools-mileage-year-progress"),
      reset: document.getElementById("tools-mileage-reset"),
      runCurrent: document.getElementById("run-current"),
      runTarget: document.getElementById("run-target"),
      runUnit: document.getElementById("run-unit"),
      runBenchmark: document.getElementById("run-benchmark"),
      runGap: document.getElementById("run-gap"),
      runWeeklyNeeded: document.getElementById("run-weekly-needed"),
      runProjected: document.getElementById("run-projected"),
      runGoalDate: document.getElementById("run-goal-date"),
      runDaysLeft: document.getElementById("run-days-left"),
      runProgressCopy: document.getElementById("run-progress-copy"),
      runProgressMain: document.getElementById("run-progress-main"),
      runActualBar: document.getElementById("run-actual-bar"),
      runBenchmarkBar: document.getElementById("run-benchmark-bar"),
      runStatusPill: document.getElementById("run-status-pill"),
      driveCurrent: document.getElementById("drive-current"),
      driveTarget: document.getElementById("drive-target"),
      driveBenchmark: document.getElementById("drive-benchmark"),
      driveGap: document.getElementById("drive-gap"),
      driveRemaining: document.getElementById("drive-remaining"),
      driveWeeklyAllowance: document.getElementById("drive-weekly-allowance"),
      driveDailyAllowance: document.getElementById("drive-daily-allowance"),
      driveProjected: document.getElementById("drive-projected"),
      driveProgressCopy: document.getElementById("drive-progress-copy"),
      driveProgressMain: document.getElementById("drive-progress-main"),
      driveActualBar: document.getElementById("drive-actual-bar"),
      driveBenchmarkBar: document.getElementById("drive-benchmark-bar"),
      driveStatusPill: document.getElementById("drive-status-pill")
    };

    function parseNumber(value) {
      var parsed = parseFloat(value);
      return Number.isFinite(parsed) ? parsed : 0;
    }

    function formatDistance(value, unit, digits) {
      return formatNumber(value, digits) + " " + unit;
    }

    function formatDate(date) {
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric"
      }).format(date);
    }

    function loadState() {
      try {
        var raw = localStorage.getItem(storageKey);
        return raw ? Object.assign({}, defaults, JSON.parse(raw)) : Object.assign({}, defaults);
      } catch (error) {
        return Object.assign({}, defaults);
      }
    }

    function saveState() {
      localStorage.setItem(storageKey, JSON.stringify(state));
    }

    function syncInputs() {
      els.runCurrent.value = state.runCurrent;
      els.runTarget.value = state.runTarget;
      els.runUnit.value = state.runUnit;
      els.driveCurrent.value = state.driveCurrent;
      els.driveTarget.value = state.driveTarget;
    }

    function getRunGoalDate(current, target, dailyPace) {
      if (current >= target) {
        return "Already hit";
      }

      if (dailyPace <= 0) {
        return "No pace yet";
      }

      var daysNeeded = Math.ceil((target - current) / dailyPace);

      if (daysNeeded > daysRemaining) {
        return "After Dec 31";
      }

      return formatDate(new Date(now.getTime() + daysNeeded * msPerDay));
    }

    function renderRunning() {
      var unit = runUnits[state.runUnit];
      var current = Math.max(state.runCurrent, 0);
      var target = Math.max(state.runTarget, 1);
      var benchmark = target * yearProgress;
      var gap = current - benchmark;
      var projected = yearProgress > 0 ? current / yearProgress : current;
      var dailyPace = current / Math.max(dayOfYear, 1);
      var weeklyNeeded = current >= target ? 0 : (target - current) / Math.max(weeksRemaining, 1 / 7);
      var targetPercent = (current / target) * 100;
      var benchmarkPercent = (benchmark / target) * 100;

      els.runBenchmark.textContent = formatDistance(benchmark, unit.short, 1);
      els.runGap.textContent = (gap >= 0 ? "+" : "") + formatDistance(gap, unit.short, 1);
      els.runWeeklyNeeded.textContent =
        current >= target ? "Done" : formatDistance(weeklyNeeded, unit.short, 1) + "/week";
      els.runProjected.textContent = formatDistance(projected, unit.short, 1);
      els.runGoalDate.textContent = getRunGoalDate(current, target, dailyPace);
      els.runDaysLeft.textContent = daysRemaining + (daysRemaining === 1 ? " day" : " days");
      els.runProgressCopy.textContent =
        "You've finished " + formatNumber(targetPercent, 0) + "% of the goal. The year is " +
        formatNumber(yearProgress * 100, 0) + "% done.";
      els.runProgressMain.textContent =
        formatDistance(current, unit.short, 1) + " of " + formatDistance(target, unit.short, 1);

      setBarWidth(els.runActualBar, targetPercent);
      setBarWidth(els.runBenchmarkBar, benchmarkPercent);

      if (current >= target) {
        setPill(els.runStatusPill, "Goal hit", "good");
      } else if (projected >= target) {
        setPill(els.runStatusPill, "On pace", "good");
      } else if (gap >= 0) {
        setPill(els.runStatusPill, "Slightly ahead", "good");
      } else {
        setPill(els.runStatusPill, "Behind pace", "bad");
      }
    }

    function renderDriving() {
      var current = Math.max(state.driveCurrent, 0);
      var target = Math.max(state.driveTarget, 1);
      var benchmark = target * yearProgress;
      var gap = current - benchmark;
      var remaining = target - current;
      var projected = yearProgress > 0 ? current / yearProgress : current;
      var weeklyAllowance = remaining <= 0 ? 0 : remaining / Math.max(weeksRemaining, 1 / 7);
      var dailyAllowance = remaining <= 0 ? 0 : remaining / Math.max(daysRemaining, 1);
      var targetPercent = (current / target) * 100;
      var benchmarkPercent = (benchmark / target) * 100;

      els.driveBenchmark.textContent = formatDistance(benchmark, "mi", 0);
      els.driveGap.textContent = (gap >= 0 ? "+" : "") + formatDistance(gap, "mi", 0);
      els.driveRemaining.textContent = formatDistance(remaining, "mi", 0);
      els.driveWeeklyAllowance.textContent =
        remaining <= 0 ? "No buffer left" : formatDistance(weeklyAllowance, "mi", 0) + "/week";
      els.driveDailyAllowance.textContent =
        remaining <= 0 ? "No buffer left" : formatDistance(dailyAllowance, "mi", 1) + "/day";
      els.driveProjected.textContent = formatDistance(projected, "mi", 0);
      els.driveProgressCopy.textContent =
        "You've used " + formatNumber(targetPercent, 0) + "% of the allowance. The year is " +
        formatNumber(yearProgress * 100, 0) + "% done.";
      els.driveProgressMain.textContent =
        formatDistance(current, "mi", 0) + " of " + formatDistance(target, "mi", 0);

      setBarWidth(els.driveActualBar, targetPercent);
      setBarWidth(els.driveBenchmarkBar, benchmarkPercent);

      if (current > target) {
        setPill(els.driveStatusPill, "Over cap", "bad");
      } else if (projected <= target * 0.9) {
        setPill(els.driveStatusPill, "Comfortable", "good");
      } else if (projected <= target) {
        setPill(els.driveStatusPill, "Under control", "warn");
      } else {
        setPill(els.driveStatusPill, "Heavy pace", "bad");
      }
    }

    function setStateFromInputs() {
      state.runCurrent = Math.max(0, parseNumber(els.runCurrent.value));
      state.runTarget = Math.max(1, parseNumber(els.runTarget.value));
      state.runUnit = els.runUnit.value;
      state.driveCurrent = Math.max(0, parseNumber(els.driveCurrent.value));
      state.driveTarget = Math.max(1, parseNumber(els.driveTarget.value));
      saveState();
      render();
    }

    function changeRunUnit(nextUnit) {
      var previousUnit = state.runUnit;

      if (previousUnit === nextUnit) {
        return;
      }

      var previousFactor = runUnits[previousUnit].factor;
      var nextFactor = runUnits[nextUnit].factor;
      var conversion = nextFactor / previousFactor;

      state.runCurrent = +(state.runCurrent * conversion).toFixed(1);
      state.runTarget = +(state.runTarget * conversion).toFixed(1);
      state.runUnit = nextUnit;
      saveState();
      syncInputs();
      render();
    }

    function render() {
      els.today.textContent = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(now);
      els.yearProgress.textContent = formatNumber(yearProgress * 100, 0) + "%";
      renderRunning();
      renderDriving();
    }

    var state = loadState();
    syncInputs();
    render();

    ["input", "change"].forEach(function (eventName) {
      els.runCurrent.addEventListener(eventName, setStateFromInputs);
      els.runTarget.addEventListener(eventName, setStateFromInputs);
      els.driveCurrent.addEventListener(eventName, setStateFromInputs);
      els.driveTarget.addEventListener(eventName, setStateFromInputs);
    });

    els.runUnit.addEventListener("change", function () {
      changeRunUnit(els.runUnit.value);
    });

    els.reset.addEventListener("click", function () {
      state = Object.assign({}, defaults);
      saveState();
      syncInputs();
      render();
    });
  }

  function initPacePage() {
    var root = document.querySelector(".tools-pace-page");

    if (!root) {
      return;
    }

    var distances = {
      "5k": 3.10686,
      "10k": 6.21371,
      half: 13.1094,
      marathon: 26.2188
    };

    var els = {
      minutes: document.getElementById("pace-minutes"),
      seconds: document.getElementById("pace-seconds"),
      unit: document.getElementById("pace-unit"),
      converted: document.getElementById("pace-converted"),
      speed: document.getElementById("pace-speed"),
      pace5k: document.getElementById("pace-5k"),
      pace10k: document.getElementById("pace-10k"),
      paceHalf: document.getElementById("pace-half"),
      paceMarathon: document.getElementById("pace-marathon"),
      tableBody: document.querySelector("#pace-table tbody")
    };

    function toSecondsPerMile(minutes, seconds, unit) {
      var totalSeconds = Math.max(0, minutes * 60 + seconds);

      if (unit === "km") {
        return totalSeconds * 1.60934;
      }

      return totalSeconds;
    }

    function paceString(secondsPerMile, unit) {
      var value = unit === "km" ? secondsPerMile / 1.60934 : secondsPerMile;
      return formatDuration(value) + " /" + unit;
    }

    function renderConverter() {
      var minutes = parseInt(els.minutes.value, 10) || 0;
      var seconds = parseInt(els.seconds.value, 10) || 0;
      var unit = els.unit.value;
      var secondsPerMile = toSecondsPerMile(minutes, seconds, unit);
      var otherUnit = unit === "mi" ? "km" : "mi";
      var mph = 3600 / secondsPerMile;
      var kph = mph * 1.60934;

      els.converted.textContent = paceString(secondsPerMile, otherUnit);
      els.speed.textContent = formatNumber(mph, 2) + " mph · " + formatNumber(kph, 2) + " km/h";
      els.pace5k.textContent = formatDuration(secondsPerMile * distances["5k"]);
      els.pace10k.textContent = formatDuration(secondsPerMile * distances["10k"]);
      els.paceHalf.textContent = formatDuration(secondsPerMile * distances.half);
      els.paceMarathon.textContent = formatDuration(secondsPerMile * distances.marathon);
    }

    function buildTable() {
      if (!els.tableBody) {
        return;
      }

      var rows = [];

      for (var totalSeconds = 360; totalSeconds <= 720; totalSeconds += 30) {
        rows.push(
          "<tr>" +
            "<td data-label='Pace / mi'>" + paceString(totalSeconds, "mi") + "</td>" +
            "<td data-label='Pace / km'>" + paceString(totalSeconds, "km") + "</td>" +
            "<td data-label='5K'>" + formatDuration(totalSeconds * distances["5k"]) + "</td>" +
            "<td data-label='10K'>" + formatDuration(totalSeconds * distances["10k"]) + "</td>" +
            "<td data-label='Half'>" + formatDuration(totalSeconds * distances.half) + "</td>" +
            "<td data-label='Marathon'>" + formatDuration(totalSeconds * distances.marathon) + "</td>" +
          "</tr>"
        );
      }

      els.tableBody.innerHTML = rows.join("");
    }

    ["input", "change"].forEach(function (eventName) {
      els.minutes.addEventListener(eventName, renderConverter);
      els.seconds.addEventListener(eventName, renderConverter);
      els.unit.addEventListener(eventName, renderConverter);
    });

    buildTable();
    renderConverter();
  }

  function initEverydayPage() {
    var root = document.querySelector(".tools-everyday-page");

    if (!root) {
      return;
    }

    var els = {
      tempInput: document.getElementById("temp-input"),
      tempUnit: document.getElementById("temp-unit"),
      tempOutput: document.getElementById("temp-output"),
      distanceInput: document.getElementById("distance-input"),
      distanceUnit: document.getElementById("distance-unit"),
      distanceOutput: document.getElementById("distance-output"),
      heightFeet: document.getElementById("height-feet"),
      heightInches: document.getElementById("height-inches"),
      heightCm: document.getElementById("height-cm"),
      weightLb: document.getElementById("weight-lb"),
      weightKg: document.getElementById("weight-kg"),
      temperatureTable: document.querySelector("#temperature-table tbody"),
      distanceTable: document.querySelector("#distance-table tbody")
    };

    function decimalString(value, digits) {
      return Number(value).toFixed(digits);
    }

    function renderTemperature() {
      var value = parseFloat(els.tempInput.value) || 0;
      var unit = els.tempUnit.value;
      var converted = unit === "f" ? ((value - 32) * 5) / 9 : (value * 9) / 5 + 32;
      var suffix = unit === "f" ? "F" : "C";
      var other = unit === "f" ? "C" : "F";

      els.tempOutput.textContent =
        formatNumber(value, 1) + "°" + suffix + " = " + formatNumber(converted, 1) + "°" + other;
    }

    function renderDistance() {
      var value = parseFloat(els.distanceInput.value) || 0;
      var unit = els.distanceUnit.value;

      if (unit === "mi") {
        var km = value * 1.60934;
        els.distanceOutput.textContent =
          formatNumber(value, 2) + " mi = " + formatNumber(km, 2) + " km";
      } else {
        var mi = value / 1.60934;
        els.distanceOutput.textContent =
          formatNumber(value, 2) + " km = " + formatNumber(mi, 2) + " mi";
      }
    }

    function syncHeightFromFeet() {
      var feet = parseFloat(els.heightFeet.value) || 0;
      var inches = parseFloat(els.heightInches.value) || 0;
      var totalInches = feet * 12 + inches;
      els.heightCm.value = decimalString(totalInches * 2.54, 1);
    }

    function syncHeightFromCm() {
      var cm = parseFloat(els.heightCm.value) || 0;
      var totalInches = cm / 2.54;
      var feet = Math.floor(totalInches / 12);
      var inches = totalInches - feet * 12;
      els.heightFeet.value = feet;
      els.heightInches.value = decimalString(inches, 1);
    }

    function syncWeightFromLb() {
      var lb = parseFloat(els.weightLb.value) || 0;
      els.weightKg.value = decimalString(lb * 0.45359237, 1);
    }

    function syncWeightFromKg() {
      var kg = parseFloat(els.weightKg.value) || 0;
      els.weightLb.value = decimalString(kg / 0.45359237, 1);
    }

    function buildTables() {
      var temperatureRows = [
        [32, 0, "freezing"],
        [50, 10, "cold walk"],
        [68, 20, "room temp"],
        [77, 25, "warm day"],
        [86, 30, "hot"],
        [104, 40, "very hot"],
        [212, 100, "boiling"]
      ];
      var distanceRows = [1, 3.1, 5, 10, 13.1, 26.2, 50, 100];

      els.temperatureTable.innerHTML = temperatureRows.map(function (row) {
        return "<tr><td>" + row[0] + "°F</td><td>" + row[1] + "°C</td><td>" + row[2] + "</td></tr>";
      }).join("");

      els.distanceTable.innerHTML = distanceRows.map(function (miles) {
        var km = miles * 1.60934;
        var feet = miles * 5280;
        var meters = km * 1000;
        return "<tr><td>" + formatNumber(miles, 1) + "</td><td>" + formatNumber(km, 2) + "</td><td>" +
          formatNumber(feet, 0) + "</td><td>" + formatNumber(meters, 0) + "</td></tr>";
      }).join("");
    }

    ["input", "change"].forEach(function (eventName) {
      els.tempInput.addEventListener(eventName, renderTemperature);
      els.tempUnit.addEventListener(eventName, renderTemperature);
      els.distanceInput.addEventListener(eventName, renderDistance);
      els.distanceUnit.addEventListener(eventName, renderDistance);
      els.heightFeet.addEventListener(eventName, syncHeightFromFeet);
      els.heightInches.addEventListener(eventName, syncHeightFromFeet);
      els.heightCm.addEventListener(eventName, syncHeightFromCm);
      els.weightLb.addEventListener(eventName, syncWeightFromLb);
      els.weightKg.addEventListener(eventName, syncWeightFromKg);
    });

    buildTables();
    renderTemperature();
    renderDistance();
  }

  function initKitchenPage() {
    var root = document.querySelector(".tools-kitchen-page");

    if (!root) {
      return;
    }

    var volumeFactors = {
      tsp: 4.92892,
      tbsp: 14.7868,
      floz: 29.5735,
      cup: 236.588,
      ml: 1,
      l: 1000
    };
    var weightFactors = {
      oz: 28.3495,
      lb: 453.592,
      g: 1,
      kg: 1000
    };
    var els = {
      volumeInput: document.getElementById("kitchen-volume-input"),
      volumeUnit: document.getElementById("kitchen-volume-unit"),
      volumeOutput: document.getElementById("kitchen-volume-output"),
      weightInput: document.getElementById("kitchen-weight-input"),
      weightUnit: document.getElementById("kitchen-weight-unit"),
      weightOutput: document.getElementById("kitchen-weight-output"),
      volumeTable: document.querySelector("#kitchen-volume-table tbody"),
      weightTable: document.querySelector("#kitchen-weight-table tbody")
    };

    function renderVolume() {
      var amount = parseFloat(els.volumeInput.value) || 0;
      var unit = els.volumeUnit.value;
      var ml = amount * volumeFactors[unit];
      els.volumeOutput.textContent =
        formatNumber(ml, 1) + " ml · " +
        formatNumber(ml / 1000, 3) + " l · " +
        formatNumber(ml / volumeFactors.cup, 2) + " cups · " +
        formatNumber(ml / volumeFactors.floz, 2) + " fl oz";
    }

    function renderWeight() {
      var amount = parseFloat(els.weightInput.value) || 0;
      var unit = els.weightUnit.value;
      var grams = amount * weightFactors[unit];
      els.weightOutput.textContent =
        formatNumber(grams, 1) + " g · " +
        formatNumber(grams / 1000, 3) + " kg · " +
        formatNumber(grams / weightFactors.oz, 2) + " oz · " +
        formatNumber(grams / weightFactors.lb, 2) + " lb";
    }

    function buildTables() {
      var volumeRows = [
        ["1 tsp", "4.9 ml", "about 5 ml"],
        ["1 tbsp", "14.8 ml", "about 15 ml"],
        ["1 fl oz", "29.6 ml", "just under 30 ml"],
        ["1 cup", "236.6 ml", "about 240 ml"],
        ["2 cups", "473.2 ml", "about 1 pint"],
        ["4 cups", "946.4 ml", "about 1 quart"],
        ["1 liter", "33.8 fl oz", "about 4.23 cups"]
      ];
      var weightRows = [
        ["1 oz", "28.3 g", "dry weight"],
        ["8 oz", "226.8 g", "half pound"],
        ["16 oz", "453.6 g", "1 pound"],
        ["1 lb", "453.6 g", "0.454 kg"],
        ["500 g", "17.6 oz", "1.10 lb"],
        ["1 kg", "35.3 oz", "2.20 lb"]
      ];

      els.volumeTable.innerHTML = volumeRows.map(function (row) {
        return "<tr><td>" + row[0] + "</td><td>" + row[1] + "</td><td>" + row[2] + "</td></tr>";
      }).join("");

      els.weightTable.innerHTML = weightRows.map(function (row) {
        return "<tr><td>" + row[0] + "</td><td>" + row[1] + "</td><td>" + row[2] + "</td></tr>";
      }).join("");
    }

    ["input", "change"].forEach(function (eventName) {
      els.volumeInput.addEventListener(eventName, renderVolume);
      els.volumeUnit.addEventListener(eventName, renderVolume);
      els.weightInput.addEventListener(eventName, renderWeight);
      els.weightUnit.addEventListener(eventName, renderWeight);
    });

    buildTables();
    renderVolume();
    renderWeight();
  }

  initMileagePage();
  initPacePage();
  initEverydayPage();
  initKitchenPage();
})();
