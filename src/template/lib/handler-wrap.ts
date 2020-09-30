import express from 'express';

export const handlerWrap = (handler: express.RequestHandler): express.RequestHandler => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
      await handler(req, res, next);
  } catch (e) {
      console.error(e)
      res.status(500).json({ error: 'Internal server error' });
  }
};