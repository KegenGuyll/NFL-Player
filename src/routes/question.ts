import { Router } from 'express';
import { generateQuestionController } from '../controllers/question/generateQuestion.controller';
import asyncMiddleware from '../middleware/async.middleware';

const router: Router = Router();

router.get('/', asyncMiddleware(generateQuestionController));

export const questionRouter: Router = router;
