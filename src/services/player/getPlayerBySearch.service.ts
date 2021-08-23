import { client } from '../../';

export const getPlayerBySearchService = async (
  search: string,
  position: string
) => {
  try {
    const db = client.db('NFL').collection('players');

    if (position) {
      const result = await db
        .aggregate([
          {
            $search: {
              index: 'default',
              text: {
                query: search,
                path: {
                  wildcard: '*',
                },
              },
            },
          },
          { $match: { position } },
        ])
        .toArray();
      return { success: true, body: result };
    } else {
      const result = await db
        .aggregate([
          {
            $search: {
              index: 'default',
              text: {
                query: search,
                path: {
                  wildcard: '*',
                },
              },
            },
          },
        ])
        .toArray();
      return { success: true, body: result };
    }
  } catch (err) {
    throw err;
  }
};
