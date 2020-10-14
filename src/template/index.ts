import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import * as routes from './routes';

const app = express();

// This enables ALL CORS Requests.
// If security is required, please set cors configuration options
// Options details at: https://github.com/expressjs/cors#readme
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

routes.init(app);

app.listen(3300, () => {
  console.log(`App listening at http://localhost:3300`)
});

