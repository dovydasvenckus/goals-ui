# goals-ui

## Setup local environment

### Configuration

Create .env file with such content:

```
BASE_REPO_URL=https://raw.githubusercontent.com/<username>/<repo-name>/<branch>
```

### Launching app

Run

```
yarn install
yarn start
```

Site should be available at http://localhost:1234/ address

## Remote deployment (e.g Netlify)

On build server you should define environment variable `BASE_REPO_URL`.

E.g:

```
BASE_REPO_URL=https://raw.githubusercontent.com/<username>/<repo-name>/<branch>
```
