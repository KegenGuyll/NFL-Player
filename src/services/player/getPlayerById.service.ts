import { ObjectId } from 'mongodb';
import { client } from '../../';

export const getPlayerByIdService = async (id: string) => {
  try {
    const oId = new ObjectId(id);

    const result = await client
      .db('NFL')
      .collection('players')
      .findOne({ _id: oId });

    return { success: true, body: result };
  } catch (err) {
    throw err;
  }
};
