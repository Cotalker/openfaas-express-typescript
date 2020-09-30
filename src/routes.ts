// THESE ARE SAMPLE IMPORTS
// import { me } from './handlers/me';
// import { web } from  './handlers/web';
// import { process } from './handlers/process';
import express from 'express';

import { handler } from './handlers';
import { handlerWrap } from './helpers/handler-wrap';


export function init(app: express.Application) {
    app.all('/', handlerWrap(handler));

    // Edit with your own routes
    // app.all('/web', handlerWrap(web));
    // app.post('/process', handlerWrap(process));
    // app.all('/me', handlerWrap(me));
}
