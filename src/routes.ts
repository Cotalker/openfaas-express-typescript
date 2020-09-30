// THESE ARE SAMPLE IMPORTS
// import { me } from './handlers/me';
// import { web } from  './handlers/web';
// import { process } from './handlers/process';

import { handler } from './handlers/index';

export function init(app) {
    app.all('/', handler);
    
    // Edit with your own routes
    // app.all('/web', web);
    //app.post('/process', process);
    //app.all('/me', me);
}
