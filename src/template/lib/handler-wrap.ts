import express from 'express';
import {NetworkError} from "./errors/NetworkError";

export const handlerWrap = (handler: express.RequestHandler): express.RequestHandler => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
      await handler(req, res, next);
  } catch (e) {
      console.error(e)

      if (e instanceof NetworkError) {
          res.status(e.statusCode).json({ error: e.message });
      }

      res.status(500).json({ error: 'Internal server error' });
  }
};