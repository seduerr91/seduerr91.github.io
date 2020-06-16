---
title: Objekterkennung mittels Machine Learning
tags: [Coding]
style: fill
color: warning
description: German Article - Deutscher Fassung meines Artikels über mein Projekt mit Professor Peter Gloor vom MIT in Boston.
---
Anmerkung: Dies sind sehr initiale Forschungergebnisse, welche bisher nicht extern validiert wurden.

Pflanzen reagieren auf positive und negative emotionale Stimmen unterschiedlich. - Warte! Was? Pflanzen __reagieren__? Was tun sie? Letzteres war meine Reaktion, als ich mit dieser Forschung konfrontiert wurde, die ich im Folgenden vorstelle.

Anbei ein Videoausschnitt des Objekttrackers getestet mit einer fliegenden Paprika:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Za6oUCQ0QVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Erste Ergebnisse der manuellen Objektverfolgung

Erste Forschungsunterfangen meiner Kollegin Josephine deuten darauf hin, dass bestimmte Pflanzen (wir experimentieren mit der Mimose, _Mimosa Pudica_, und der Codario, _Codariocalyx Motorius_) ihre Blätter schneller anheben und beschleunigen, wenn sie verschiedenen Arten von Musik (1) oder stimmlichen Emotionen (2) ausgesetzt sind:

(1) Codario und verschiedene Musikarten

![Musikarten](https://i.imgur.com/9cwEpuj.png)

Diese Diagramme veranschaulichen die Zeit, die die Codario benötigt, um auf verschiedene auditive Stimuli wie "Stille", "Metal", "Techno", "klassisch" und "Jodeln" zu reagieren (letzteres verdient die Erwähnung unseres [Mentors](https://cci.mit.edu/pgloor/), der Schweizer ist). Man stellt fest, dass die Pflanze unter Jodeln wesentlich schneller reagierte als bei Stille. Die nächste Analyse zeigt, wie sich Pflanzen bei glücklichen oder traurigen menschlichen Stimmen verhalten: :smile:

(2) Codario und verschiedene Emotionen

Überraschenderweise zeigt sich, dass die Codario ihre Blätter tatsächlich viermal höher und auch länger anhebt, wenn sie glücklichen auditiven Emotionen lauscht. Anmerkung: Für dieses Experiment verwenden wir einen [professionellen Datensatz](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5955500/) von Künstlern, die dieselben positiven Sätze sowohl auf sehr positive als auch auf sehr negative Weise wiederholen.

![Emotionen](https://i.imgur.com/EkNwJIA.png)
*Die Farben sind verschiedene Blätter derselben Pflanze, und man kann erkennen, dass die linke y-Achse für die verschiedenen Pflanzen unterschiedlich ist.*

## Datenerfassung

Ich hatte nicht erwartet, dass sich Pflanzen anders bewegen, wenn eine Person fröhliche oder traurige Formulierungen spricht. Aktuell replizieren wir diese frühen Ergebnisse mit umfangreicheren Datenmengen und automatisieren die Datenanalyse mittels maschinellem Lernen ('Machine Learning'). Dafür erzeugten wir zuerst mehr von der wichtigsten Währung der heutigen Zeit: Daten.

### Sound Vorbereitungen

Um neue Videos zu erstellen, mussten wir zuerst positive und negative Stimmen-Audios erstellen. Durch ein Python :snake: Skript haben wir verschiedene Tondateien zusammengeführt, in welchen auf einen Hörreiz (positive oder negativ) zehn oder sechzig Sekunden Stille folgt, bis der nächste kommt. Die Emotionen (positiv vs. negativ) wurden abgewechselt, um Umgebungsvariablen wie Sonneneinstrahlung, Tageszeit oder Raumtemperatur konstant zu halten.

Exemplarischer Ausschnitt aus dem [Algorithmus zur Erstellung von Sounddateien](https://github.com/plantions/creatingEmotionAudios):

```
während der Zähler < (len(happy_sounds) + len(sad_sounds))/2:
    wavset.append(fröhliche_Klänge[Zähler])
    wavset.append ("extra_Klänge/Stille_60s.wav")
    wavset.append(sad_sounds[Zähler])
    wavset.append ("extra_Klänge/Stille_60s.wav")
    Zähler += 1
wavs = [AudioSegment.from_wav(wav) für wav im wavset]
kombiniert = wavs[0]
```

Beim Erstellen dieser Audiodateien lernte ich:
- Das Zusammenspiel von Sample Rates, die Definition eines Computers für Stille (realtiv umfangreicher Datensatz) und die Komplexität riesiger Data set-Ordnerstrukturen.
- Wie Schallwellen vom Menschen empfangen werden: Die Art und Weise, wie ein Computer sie nutzt und was wir hören unterscheidet sich dramatisch. Daher verwenden wir das [MFCC](https://towardsdatascience.com/extract-features-of-music-75a3f9bc265d), um verschiedene menschliche Organe (hauptsächlich das Zusammenspiel von Hals, Kiefer und Zunge) für die Analyse zu simulieren.
- Wir mussten die Sounddateien kurzfristig einer Empfehlung unseres Mentors anpassen und konnten von unserem flexiblen Ansatz zur Erstellung mittels Skript schnell und aufwandsarm reagieren.

### Video Aufzeichnung

Unser Mentor erzeugte für uns mit den Sound-Dateien neue Datensätze, indem er seine Pflanzen filmte, während sie unseren verschiedenen Tondateien stundenlang ausgesetzt waren. Wir sind sehr dankbar für die entstandenen Videodateien, da sie eine Fülle von visuellen und akustischen Geräuschen enthalten. Das ist besonders nützlich, weil wir mit realistischen Datensätzen näher an der tatsälichen Arbeit eines Machine Learning Engineers dran sind. Daher müssen wir eine Fülle von Datenmanipulationen durchführen, um unsere Daten verwerten zu können.

## My Job: Automatisierung der 'Glücksanalyse durch Machine Learning'.

Wir evaluierten verschiedene Werkzeuge des maschinellen Lernens (dlib, OpenCV, Sci-Kit-Image) und den gesamten Prozess der Bewegtbild- _aka Video-_ analyse, um indirekte Emotionen der Sprecher anhand der Pflanzenreaktionen herauszuholen.

### Cloud-Supercomputer, Werkzeuge des machinellen Lernens und moderne Codingservices

Als nächstes richten wir eine Cloud-basierte Infrastruktur ein, um unsere kleinen MacBooks __nicht__ zu sehr zu quälen. Dieser Cloud-Dienst heißt Google Colab und stellt sicher, dass wir immense Rechenleistung (z.B. 26 GB RAM) zum Lernen zur Verfügung haben, um unsere Videos schnell zu verarbeiten. So sieht diese Entwicklungsinfrastruktur aus:

![Google Colab-Übersicht](https://i.imgur.com/mWm041e.png)

Im Folgenden wird nun die aktuelle Version des Objekttrackers vorgestellt, mit dem wir viele interessante Punkte gleichzeitig verfolgen und dabei umfassende Datenmengen erzeugen können. Nachfolgend findet sich ein Beispiel wie dies aussehen kann:

![Unmengen von Tracking-Punkten](https://i.imgur.com/fe5HRlD.png)

### Überblick über aktuelles Objekt-Tracker Tool

Das [aktuelle Objektverfolgungstool](https://github.com/plantions/video-edge-extractor/blob/master/Emotion_Tracker.ipynb) besteht aus fünf Datenverarbeitungsschritten. Diese sind:

(1) das Hochladen eines Videos, (2) die Auswahl von Hyperparametern für verschiedene Videos, (3) die Verarbeitung und Darstellung des Videos, (4) die eigentliche Datenanalyse bzw. -manipulation und als (5) Ergebnis eine interaktive Visualisierung der Bewegungen. Im Folgenden gibt's einen kurzen Überblick, was in den einzelnen Schritten passiert und was ich bei der Entwicklung des Tools Neues gelernt habe.

#### 0. Schritt: Video hochladen
![Funktion zum Hochladen](https://i.imgur.com/6VB4WCP.png)

Was geht hier vor?

- Eine einfache Upload-Funktion zum Hochladen beliebiger Videos in die Google Colab-Umgebung.
- Im Hintergrund werden alle notwendigen Tools ('Python :snake: libraries') vorgeladen.

Was habe ich gelernt?

- Das Importieren umfangreicher Videodateien (durch Einbinden von Google Drive für große Dateien).
- Das Hochladen kurzer Videodateien (durch interaktive Upload-Funktionen).
- Bereinigen alter Dateien, die während der Videoverarbeitung erstellt werden, um Speicherplatz zu optimieren.

#### 1. Schritt: Wählen der Hyperparameter

![Hyperparame](https://i.imgur.com/3dJPV0O.png)

Was geht hier vor?

- Das interaktive Front-End-Formular nimmt die Eingaben verschiedener Parameter entgegen, die für verschiedene Videosetups vorzunehmen sind.
- Die Klassen für die automatisierte Objektverfolgung werden initialisiert. Sie sind so konstruiert, dass sie eine Region von interessanten Punkten verfolgen (x-, y-Koordinaten).

Was habe ich gelernt?

- Wie [Dilation und Erosion](https://docs.opencv.org/2.4/doc/tutorials/imgproc/erosion_dilatation/erosion_dilatation.html) funktionieren.
- Was der [Maskenschwellenwert](https://docs.opencv.org/3.4/d7/d4d/tutorial_py_thresholding.html) macht.
- Das [Kontur-Feature](https://docs.opencv.org/trunk/dd/d49/tutorial_py_contour_features.html) und seine Verwendung.

#### 2. Schritt: Verarbeitung & Betrachten des Videos

![Videoverarbeitung](https://i.imgur.com/VhWumNT.png)

Was geht hier vor?

- Jedes Bild (30 Bilder pro Sekunde, 720s für ein 12 minütiges Video) wird mit den in Schritt 1 eingestellten Parametern erfasst und analysiert.
- Die exportierten Daten (x- und y-Koordinaten, Breite und Höhe der umschließenden Box sowie die ID) werden während der Verarbeitung des Videos extrahiert und in eine Datenstruktur gespeichert.
- Das resultierende Video wird konvertiert, so dass es direkt im Jupyter-Notebook (Google Colab) betrachtet werden kann.

Was habe ich gelernt?

- Videoverarbeitung mit der Machine Learning-Bibliothek OpenCV4. Sehr empfehlenswert.
- Die Datenextraktion kann sehr verwirrend sein. Man brauchte die Grundlagen der Programmiersprache Python. Vielen Dank an Paul Steppacher für die Hilfe.
- Unterschiedliche Videocodecs wie MPEG, MP4 usw. sind nicht dasselbe und funktionieren auch nicht gleich.

Objekttrackers, der für die Mimose eingesetzt wird, um eine Vorstellung davon zu bekommen, wie gut das Objekttracking funktioniert:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xgAhZQMkE7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



#### 3. Schritt: Analyse

![Datenanalyse](https://i.imgur.com/mJLGmpp.png)

Was geht hier vor?

- Verarbeitung der Datenpunkte, die in Schritt 2 aus dem Video extrahiert wurden.
- Extrahieren der Audiodatei und Erstellen von Features, die für die Audioanalyse verwendet werden können.
- Datenadaptionen zur Synchronisierung der Audio- und Videodatenpunkte.

Was habe ich gelernt?

- Erstellen und Manipulieren von :panda_face: DataFrames, einschließlich Schwenken, Entfernen von Duplikaten, Abfragen, Filtern, Invertieren, usw.
- Verarbeitung von Audiodateien in einer Shell, Extrahieren von Abtastraten und MFCC-Features.
- Zusammenführen verschiedener :panda_face: Datenstrukturen unter Verwendung von Primärschlüsseln und 'outer/inner' joints ([Datenmanipulation und -analyse mit :panda_face:](https://pandas.pydata.org/pandas-docs/stable/user_guide/visualization.html)).

#### 4. Schritt: Interaktive Visualisierung

![Altair](https://i.imgur.com/3X9jQLS.png)

Was geht hier vor?

- Die resultierenden Datenpunkte werden zu einer langen Datenstruktur konvertiert, um sie für die grafische API Altair vorzubereiten.
- Die maximale Inputmenge von 5000 Datenpunkten wird ausgenutzt, um die Bewegung des Objekts und die Begleitgeräusche zu visualisieren.

Was habe ich gelernt?

- [Dynamische Visualisierungen mit Altair](https://altair-viz.github.io/getting_started/overview.html).
- Breite vs. lange Datenformate und wie man diese umwandelt.

#### 5. Zusätzliche Funktionen

![Zusätzliche Funktionen](https://i.imgur.com/3WNYImh.png)

Für Entwicklungs- und Testzwecken habe ich zusätzliche Funktionen erzeugt. Diese umfassen:
- Eine Datenexportfunktion.
- Eine Funktion zur Visualisierung von Korrelationen: 'Interaktive Scatter Plots'. Anmerkung: Das interaktive Streudiagramm befindet sich noch in der Entwicklung.
- Eine Funktion zur Messung der Videodauer: 'Check for Movie Duration'.
- Ein Feature zum Abrufen des 'Frames per Second'-Wertes eines Videos: 'Getting FPS of Video'.

### Nächste Schritte

Nun, da die Datenpipeline funktionsfähig ist und erste Datenanalysen Ergebnisse liefern, wird im nächsten Schritt ein Tool zum Evaluation glücklicher oder trauriger Emotionen hinzugefügt. Das folgende Bild zeigt vielversprechende Tracking-Spots.

![Richtige Tracking-Spots](https://i.imgur.com/FK4dQqk.png)

Vielen Dank für Kommentare und Interesse! Schreibt mir gerne ein Mail mit Feedback an sduerr@mit.edu.
