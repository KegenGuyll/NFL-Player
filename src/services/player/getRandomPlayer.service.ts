import { client } from '../../';

export const getRandomPlayerService = async (count: number) => {
  try {
    const result = await client
      .db('NFL')
      .collection('players')
      .aggregate([{ $sample: { size: count > 5 ? 5 : count } }])
      .toArray();

    return { success: true, body: result };
  } catch (err) {
    throw err;
  }
};
