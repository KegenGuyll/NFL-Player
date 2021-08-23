import { Request, Response } from 'express';
import { getPlayerByIdService } from '../../services/player/getPlayerById.service';

export const getPlayerByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) throw new Error('not a valid player ID');

  try {
    const player = await getPlayerByIdService(id);
    res.send(player);
  } catch (error: any) {
    res.status(500).send({ success: false, error: error.message });
  }
};
