import system from "system-components";

export default system(
  {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    px: 0,
    pb: 0,
    pt: 0
  },
  "justifyContent"
).extend`
  
  margin-bottom: ${({ theme }) => `-${theme.space[3]}}`};
  div {
    margin-right: ${({ theme }) => theme.space[3]};
    margin-bottom: ${({ theme }) => theme.space[3]};


  &:last-child {
    margin-right: 0;
    }
  }
`;
