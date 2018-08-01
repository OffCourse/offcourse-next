import { queries } from "..";

export const changeCardSize = async (_, { numberOfColumns }, { cache }) => {
    const previous = cache.readQuery({ query: queries.courseCard });
    const { __typename, initialLevel, layout } = previous.courseCard;
    const nextLevel = numberOfColumns < 3 ? numberOfColumns : 3;
    const data = { courseCard: { __typename, initialLevel: nextLevel, layout } }
    cache.writeData({ data });
    return data;
};