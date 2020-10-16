# Quick start

1. Replace `myfunction` in express-typescript.yml with your function name.  
NOTE: Must be unique in the namespace

3. Implement logic in `handlers/index.ts`  
NOTE: you can delete sample files `handlers/web.ts`, `handlers/me.ts` and `handlers/process.ts`

4. Any asset (non-ts file) create and reference from the `static/` folder  
NOTE: you can delete `static/index.html`

## Install Cotalker npm packages

Register Cotalker NPM Registry:
```
npx npm-login-noninteractive -r https://npm.pkg.github.com -u github_user -p github_token -e github_email
npm config set @cotalker:registry https://npm.pkg.github.com
```

Add Cotalker libraries:
```
npm install --save @cotalker/lib-cotalker-models
npm install --save @cotalker/lib-cotalker-api
```

For a list of available Cotalker packages please visit:
https://github.com/orgs/Cotalker/packages

## Run locally
```
npm ci
npm run build && node dist/template
```
Test:
```
curl http://localhost:3300
```

## Upload to Openfaas

```
npm ci
npm run build && npm run faas:build
npm run deploy:[staging | production] -- --build-arg REGISTRY_USER=github_user --build-arg REGISTRY_TOKEN=github_token --build-arg REGISTRY_EMAIL=github_email
```
Test:
```
curl http://localhost:8080/function/myfunction
```

