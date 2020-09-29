import express from 'express';
import bodyParser from 'body-parser';
import * as routes from './routes';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
routes.init(app);

app.listen(3300, () => {
  console.log(`App listening at http://localhost:3300`)
});

