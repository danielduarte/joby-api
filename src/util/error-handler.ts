import { Request, Response, Handler, NextFunction } from 'express';

const asyncHandler = (fn: Handler) => (req: Request, res: Response, next: NextFunction): void => {
  Promise
    .resolve(fn(req, res, next))
    .catch(next);
};

export default asyncHandler;
