import system from "system-components";

const itemSpacing = (spacing, theme) => {
  const spaceTable = {
    wide: theme.space[6],
    normal: theme.space[4],
    tight: theme.space[3],
    none: theme.space[0]
  };
  return spaceTable[spacing];
};

const ListWrapper = system(
  {
    is: "ul",
    display: "flex",
    flexDirection: "row",
    alignContent: "stretch",
    m: 0,
    p: 0
  },
  props => ({
    marginBottom:
      props.direction === "vertical" || props.direction === "both"
        ? `-${itemSpacing(props.spacing, props.theme)}`
        : 0,
    marginRight:
      props.direction === "horizontal" || props.direction === "both"
        ? `-${itemSpacing(props.spacing, props.theme)}`
        : 0
  })
).extend`
  li {
    margin-right: ${({ theme, direction, spacing }) =>
      direction === "horizontal" || direction === "both"
        ? itemSpacing(spacing, theme)
        : 0};
    margin-bottom: ${({ theme, direction, spacing }) =>
      direction === "vertical" || direction === "both"
        ? itemSpacing(spacing, theme)
        : 0}
`;

export default ListWrapper;
