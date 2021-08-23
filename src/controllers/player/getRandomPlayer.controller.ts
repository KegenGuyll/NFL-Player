import { Request, Response } from 'express';
import { getRandomPlayerService } from '../../services/player/getRandomPlayer.service';

export const getRandomPlayerController = async (
  req: Request,
  res: Response
) => {
  const count: number = Number(req.query.count) | 1;
  const position = req.query.position as string | '';
  try {
    const randomPlayer = await getRandomPlayerService(count, position);
    res.send(randomPlayer);
  } catch (error: any) {
    res.status(500).send({ success: false, error: error.message });
  }
};
