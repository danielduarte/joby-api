import { MongoDbRepository } from '../repositories/mongodb-repository';
import { JobSearch } from '../models';
import express from 'express';
import asyncHandler from '../util/error-handler';

const router = express.Router();
const repository = new MongoDbRepository(JobSearch);

// Get the list of job searches.
router.get('/', asyncHandler(async function(req: any, res: any) {
  const entities = await repository.findAll();
  res.json(entities);
}));

// Create a job search.
router.post('/', asyncHandler(async function(req: any, res: any) {
  const entity = await repository.create(req.body);
  res.json(entity);
}));

// Get a job search by id.
router.get('/:jsId', asyncHandler(async function(req: any, res: any) {
  const entity = await repository.findById(req.params.jsId);
  res.json(entity);
}));

// Update a job search by id.
// @todo fail when id is not valid
router.patch('/:jsId', asyncHandler(async function(req: any, res: any) {
  await repository.updateById(req.params.jsId, req.body);
  res.end();
}));

// Delete a job search by id.
router.delete('/:jsId', asyncHandler(async function(req: any, res: any) {
  await repository.deleteById(req.params.jsId);
  res.end();
}));

export default router;
