import request from 'request';

const DEBUG = true;

// This function wrapps request:
// 1. Adds async support
// 2. Adds error support for status codes
export function requestPromise<T>(Authorization, uri, method = 'GET', body = {}): Promise<T> {
    const config = {
        uri,
        method,
        body,
        headers: {
            Authorization,
            admin: true,
        },
        json: true,
    };

    if (DEBUG) {
        console.log('NETWORK (1):', { config });
    }
    return new Promise((resolve, reject) =>
        request(config, (err, response, requestBody) => {
            if (DEBUG) {
                console.log('NETWORK (2):', { body: requestBody, err, statusCode: response && response.statusCode });
            }

            if (err) {
                console.log('Error (0)', JSON.stringify({ config, err }, null, 2));
                return reject(err);
            }

            if (!response || !response.statusCode) {
                console.log('Error (1)', JSON.stringify({ statusCode: response.statusCode, config, body: requestBody }, null, 2));
                return reject(new Error('No response/status code'));
            }

            if (response.statusCode < 200 || response.statusCode >= 400) {
                console.log('Error (2)', JSON.stringify({ statusCode: response.statusCode, config, body: requestBody }, null, 2));
                return reject(new Error('Status Code: ' + response.statusCode));
            }

            return resolve(requestBody);
        }));
}
