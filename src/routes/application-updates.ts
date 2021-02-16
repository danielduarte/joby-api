import express from 'express';
import { MongoDbRepository } from '../repositories/mongodb-repository';
import { ApplicationUpdate } from '../models';
import asyncHandler from '../util/error-handler';

const router = express.Router();
const repository = new MongoDbRepository(ApplicationUpdate);

// Get the list of updates of an application.
router.get('/', asyncHandler(async function(req: any, res: any) {
  const entities = await repository.findAll({ jobSearchId: req.params.jsId, appId: req.params.appId });
  res.json(entities);
}));

// Create an application update.
router.post('/', asyncHandler(async function(req: any, res: any) {
  const entity = await repository.create({ ...req.body, jobSearchId: req.params.jsId, appId: req.params.appId });
  res.json(entity);
}));

// Get an application update by id.
router.get('/:uId', asyncHandler(async function(req: any, res: any) {
  const entities = await repository.findAll({ _id: req.params.uId, jobSearchId: req.params.jsId, appId: req.params.appId });
  if (entities.length === 0) {
    throw new Error(`Entity with id "${req.params.uId}" does not exist in parent entity with id "${req.params.jsId}"`);
  }
  res.json(entities[0]);
}));

// Update an application update by id.
router.patch('/:uId', asyncHandler(async function(req: any, res: any) {
  const updateCount = await repository.update({ _id: req.params.uId, jobSearchId: req.params.jsId, appId: req.params.appId }, req.body);
  if (updateCount === 0) {
    throw new Error(`Entity with id "${req.params.uId}" does not exist in parent entity with id "${req.params.appId}"`);
  }
  res.end();
}));

// Delete an application update by id.
router.delete('/:uId', asyncHandler(async function(req: any, res: any) {
  const deleteCount = await repository.delete({ _id: req.params.uId, jobSearchId: req.params.jsId, appId: req.params.appId });
  if (deleteCount === 0) {
    throw new Error(`Entity with id "${req.params.uId}" does not exist in parent entity with id "${req.params.appId}"`);
  }
  res.end();
}));

export default router;
