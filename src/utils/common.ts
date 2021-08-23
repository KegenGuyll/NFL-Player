export const randomNumberGen = (start: number, max: number) => {
  return Math.floor(Math.random() * max) + start;
};

export const randomPositionGen = () => {
  const position = ['QB', 'RB', 'WR', 'DB'];

  return position[randomNumberGen(0, position.length)];
};
