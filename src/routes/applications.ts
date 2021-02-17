import { MongoDbRepository } from '../repositories/mongodb-repository';
import { Application } from '../models';
import asyncHandler from '../util/error-handler';
import express, { Request, Response } from 'express';

const router = express.Router({ mergeParams: true });
const repository = new MongoDbRepository(Application);

// Get the list of applications for a job search.
router.get('/', asyncHandler(async function(req: Request, res: Response) {
  const entities = await repository.findAll({ ...req.query, jobSearchId: req.params.jsId });
  res.json(entities);
}));

// Create an application for a job search.
router.post('/', asyncHandler(async function(req: Request, res: Response) {
  const entity = await repository.create({ ...req.body, jobSearchId: req.params.jsId });
  res.json(entity);
}));

// Get an application by id.
router.get('/:appId', asyncHandler(async function(req: Request, res: Response) {
  const entities = await repository.findAll({ _id: req.params.appId, jobSearchId: req.params.jsId });
  if (entities.length === 0) {
    throw new Error(`Entity with id "${req.params.appId}" does not exist in parent entity with id "${req.params.jsId}"`);
  }
  res.json(entities[0]);
}));

// Update an application by id.
// @todo fail when id is not valid
router.patch('/:appId', asyncHandler(async function(req: Request, res: Response) {
  const updateCount = await repository.update({ _id: req.params.appId, jobSearchId: req.params.jsId }, req.body);
  if (updateCount === 0) {
    throw new Error(`Entity with id "${req.params.appId}" does not exist in parent entity with id "${req.params.jsId}"`);
  }
  res.end();
}));

// Delete an application by id.
router.delete('/:appId', asyncHandler(async function(req: Request, res: Response) {
  const deleteCount = await repository.delete({ _id: req.params.appId, jobSearchId: req.params.jsId });
  if (deleteCount === 0) {
    throw new Error(`Entity with id "${req.params.appId}" does not exist in parent entity with id "${req.params.jsId}"`);
  }
  res.end();
}));

export default router;
