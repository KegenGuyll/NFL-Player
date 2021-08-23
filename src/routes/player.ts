import { Router } from 'express';
import { getPlayerByIdController } from '../controllers/player/getPlayerById.controller';
import { getPlayerBySearchController } from '../controllers/player/getPlayerBySearch.controller';
import { getRandomPlayerController } from '../controllers/player/getRandomPlayer.controller';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.get('/random', asyncMiddleware(getRandomPlayerController));

router.get('/search', asyncMiddleware(getPlayerBySearchController));

router.get('/:id', asyncMiddleware(getPlayerByIdController));

export const playerRouter: Router = router;
