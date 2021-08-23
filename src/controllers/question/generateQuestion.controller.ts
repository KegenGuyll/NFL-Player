import { Request, Response } from 'express';
import { generateQuestionService } from '../../services/question/generateQuestion.service';

export const generateQuestionController = async (
  req: Request,
  res: Response
) => {
  const count: number = Number(req.query.count) | 4;
  try {
    const question = await generateQuestionService(count);
    res.send(question);
  } catch (error: any) {
    res.status(500).send({ success: false, error: error.message });
  }
};
