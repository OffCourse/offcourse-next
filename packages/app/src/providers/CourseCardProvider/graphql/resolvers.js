import { courseCard } from "./queries";

const changeCardSize = async (_, { width, numberOfColumns }, { cache }) => {
  const previous = cache.readQuery({ query: courseCard });
  const { __typename, initialLevel, layout } = previous.courseCard;
  let nextLevel = initialLevel;
  if (numberOfColumns) {
    nextLevel = numberOfColumns < 3 ? numberOfColumns : 3;
  }

  if (width) {
    nextLevel = width < 640 ? 0 : 1;
  }

  const data = { courseCard: { __typename, initialLevel: nextLevel, layout } };
  cache.writeData({ data });
  return data;
};

const Mutation = {
  changeCardSize
};

export default { Mutation };
