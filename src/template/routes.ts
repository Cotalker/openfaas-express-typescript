// THESE ARE SAMPLE IMPORTS
// import { me } from '../handlers/examples/me';
// import { web } from  '../handlers/examples/web';
// import { process } from '../handlers/examples/process';
// import { error } from '../handlers/examples/error404';

import express from 'express';

import { handler } from '../handlers';
import { handlerWrap } from './lib/handler-wrap';

export function init(app: express.Application) {
    app.all('/', handlerWrap(handler));

    // Edit with your own routes
    // app.all('/web', handlerWrap(web));
    // app.post('/process', handlerWrap(process));
    // app.all('/me', handlerWrap(me));
    // app.all('/error', handlerWrap(error));
}
