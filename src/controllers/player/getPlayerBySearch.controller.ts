import { Request, Response } from 'express';
import { getPlayerBySearchService } from '../../services/player/getPlayerBySearch.service';

export const getPlayerBySearchController = async (
  req: Request,
  res: Response
) => {
  const search = req.query.player as string;
  const position = req.query.position as string | '';

  if (!search) throw new Error('not a valid search');

  try {
    const player = await getPlayerBySearchService(search, position);
    res.send(player);
  } catch (error: any) {
    res.status(500).send({ success: false, error: error.message });
  }
};
