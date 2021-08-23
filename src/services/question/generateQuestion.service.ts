import { client } from '../../';
import { Player } from '../../models/player';
import { randomNumberGen, randomPositionGen } from '../../utils/common';

export const generateQuestionService = async (answerSize: number) => {
  try {
    let players = [];
    const playersPositions = await client
      .db('NFL')
      .collection('players')
      .find({ position: randomPositionGen() })
      .toArray();

    for (let index = 0; index < answerSize; index++) {
      players.push(
        playersPositions[randomNumberGen(0, playersPositions.length)]
      );
    }

    const randomNum = randomNumberGen(0, answerSize);
    const question = players.map((player, index) => {
      if (index === randomNum) {
        return {
          ...player,
          correct: true,
        };
      } else {
        return {
          ...player,
          correct: false,
        };
      }
    });

    return { success: true, body: question };
  } catch (err) {
    throw err;
  }
};
