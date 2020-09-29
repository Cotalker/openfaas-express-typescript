import { me } from './handlers/me';
import { web } from  './handlers/web';
import { process } from './handlers/process';

export function init(app) {
    app.all('/web', web);
    app.post('/process', process);
    app.all('/me', me);
}