# Devops Code and Build
Gruppe E: Lukas Lanegger, Tobias Jäger, Marcus Onisor und Tobias Wilhelm

## Frontend
Ein lightweight Frontend wurde mittels Tailwind css erstellt, um die Notizen einsehen und anlegen zu können.

## Test
Für den Test Job wird das Framework Jest verwendet. Es wird ein Report generiert, der im Verzeichnis reports als xml abgelegt wird und von der Pipeline in der Summary view angezeigt wird.

## Lint
Beim linting wird einerseits eslint für index.js verwendet und auf der anderen Seite htmlhint für index.html. Beide laufen seriell (nacheinander) im lint job der Pipeline.

## Code Analysis
Für den Bereich der statischen Code Analyse haben wir uns für SonarQube Cloud entschieden. Der Scan wird mittels Action "sonarqube-scan-action@v4" in der Pipeline gestartet. Es wurden beim ersten Durchlauf gleich zwei Code Smells entdeckt.

## Build
Final, wenn alle drei vorherigen Jobs positiv abschließen, wird der Build-Job ausgeführt. Hierbei wird das Docker Image auf Dockerhub gepusht.

## Dependabot
Dependabot wurde zum Updaten von Fremdkomponenten verwendet. Der Bot erstellt einen Pull Request, was die Standard-Pipeline lostritt, jedoch ohne Zugriff auf die Secrets. Das führte zu failed Pipeline runs. Als fix haben wir folgende Line bei den Jobs code-analysis und build (diese nutzen ein secret) eingefügt: if: "github.actor != 'dependabot[bot]'".

# Notes Backend

This repository is used as a starting point for an assignment. Originally it is from the amazing MOOC [FullStackOpen](https://fullstackopen.com/)

## Usage of this repository

### Inital installation
```bash
npm install
```

### Start the application
```bash
npm start
```

### Start with Hot-Reload
```bash
npm run dev
```