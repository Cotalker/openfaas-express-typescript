# Quick start

1. Replace `myfunction` in express-typescript.yml with your function name.  
NOTE: Must be unique in the namespace

2. Edit file `src/routes.ts` and create your own route(s)

3. Implement logic in `handlers/function-name.ts`  
NOTE: you can delete sample files `handlers/web.ts`, `handlers/me.ts` and `handlers/process.ts`

4. Any asset (non-ts file) create and reference from the `static/` folder  
NOTE: you can delete `static/index.html`

## Run locally
```
npm ci
npm run build && node dist
```

## Upload to Openfaas

```
npm ci
npm run build && npm run upfaas
```

