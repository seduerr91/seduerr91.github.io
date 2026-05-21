(function () {
  var root = document.querySelector(".goals-page");

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
  var weeksElapsed = dayOfYear / 7;
  var runUnits = {
    mi: { label: "miles", short: "mi", factor: 1 },
    km: { label: "kilometers", short: "km", factor: 1.60934 },
  };
  var defaults = {
    runCurrent: 0,
    runTarget: 1000,
    runUnit: "mi",
    driveCurrent: 0,
    driveTarget: 10000,
  };
  var storageKey = "seb-goals-" + year;

  var els = {
    today: document.getElementById("goals-today"),
    yearProgress: document.getElementById("goals-year-progress"),
    reset: document.getElementById("goals-reset"),
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
    driveStatusPill: document.getElementById("drive-status-pill"),
  };

  function loadState() {
    try {
      var raw = localStorage.getItem(storageKey);

      if (!raw) {
        return Object.assign({}, defaults);
      }

      return Object.assign({}, defaults, JSON.parse(raw));
    } catch (error) {
      return Object.assign({}, defaults);
    }
  }

  function saveState(state) {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function parseNumber(value) {
    var parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function formatNumber(value, digits) {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: digits,
      minimumFractionDigits: digits || 0,
    }).format(value);
  }

  function formatDistance(value, unit, digits) {
    return formatNumber(value, digits) + " " + unit;
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  }

  function setPill(el, text, state) {
    el.textContent = text;
    el.setAttribute("data-state", state);
  }

  function setBarWidth(el, percent) {
    el.style.width = clamp(percent, 0, 100) + "%";
  }

  function setStateFromInputs() {
    state.runCurrent = Math.max(0, parseNumber(els.runCurrent.value));
    state.runTarget = Math.max(1, parseNumber(els.runTarget.value));
    state.runUnit = els.runUnit.value;
    state.driveCurrent = Math.max(0, parseNumber(els.driveCurrent.value));
    state.driveTarget = Math.max(1, parseNumber(els.driveTarget.value));
    saveState(state);
  }

  function syncInputs() {
    els.runCurrent.value = state.runCurrent;
    els.runTarget.value = state.runTarget;
    els.runUnit.value = state.runUnit;
    els.driveCurrent.value = state.driveCurrent;
    els.driveTarget.value = state.driveTarget;
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
    saveState(state);
    syncInputs();
    render();
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

    var hitDate = new Date(now.getTime() + daysNeeded * msPerDay);
    return formatDate(hitDate);
  }

  function renderRunning() {
    var unit = runUnits[state.runUnit];
    var current = state.runCurrent;
    var target = Math.max(state.runTarget, 1);
    var benchmark = target * yearProgress;
    var gap = current - benchmark;
    var projected = current / yearProgress;
    var dailyPace = current / dayOfYear;
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
    } else if (gap >= target * 0.03) {
      setPill(els.runStatusPill, "Ahead of pace", "good");
    } else if (projected >= target) {
      setPill(els.runStatusPill, "On pace", "good");
    } else {
      setPill(els.runStatusPill, "Behind pace", "bad");
    }
  }

  function renderDriving() {
    var current = state.driveCurrent;
    var target = Math.max(state.driveTarget, 1);
    var benchmark = target * yearProgress;
    var gap = current - benchmark;
    var remaining = target - current;
    var projected = current / yearProgress;
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
      setPill(els.driveStatusPill, "Under control", "good");
    } else {
      setPill(els.driveStatusPill, "Heavy pace", "bad");
    }
  }

  function render() {
    els.today.textContent = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(now);
    els.yearProgress.textContent =
      formatNumber(yearProgress * 100, 0) + "% (" + dayOfYear + " of " + daysInYear + " days)";

    renderRunning();
    renderDriving();
  }

  var state = loadState();
  syncInputs();
  render();

  [
    els.runCurrent,
    els.runTarget,
    els.driveCurrent,
    els.driveTarget,
  ].forEach(function (input) {
    input.addEventListener("input", function () {
      setStateFromInputs();
      render();
    });
  });

  els.runUnit.addEventListener("change", function () {
    changeRunUnit(els.runUnit.value);
  });

  els.reset.addEventListener("click", function () {
    state = Object.assign({}, defaults);
    saveState(state);
    syncInputs();
    render();
  });
})();
