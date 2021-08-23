import { client } from '../../';

export const getRandomPlayerService = async (
  count: number,
  position: string
) => {
  try {
    const db = client.db('NFL').collection('players');

    if (position) {
      const result = await db
        .aggregate([
          { $match: { position } },
          { $sample: { size: count > 5 ? 5 : count } },
        ])
        .toArray();
      return { success: true, body: result };
    } else {
      const result = await db
        .aggregate([{ $sample: { size: count > 5 ? 5 : count } }])
        .toArray();
      return { success: true, body: result };
    }
  } catch (err) {
    throw err;
  }
};
