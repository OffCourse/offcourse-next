import { queries } from "..";

export const changeCardSize = async (_, __, { cache }) => {
    const previous = cache.readQuery({ query: queries.courseCard });
    const { __typename, initialLevel, layout } = previous.courseCard;
    const nextLevel = (initialLevel + 1) % layout.length;
    const data = { courseCard: { __typename, initialLevel: nextLevel, layout } }
    cache.writeData({ data });
    return data;
};