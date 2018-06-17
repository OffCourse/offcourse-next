import system from "system-components";

const CuratorWrapper = system({
  display: "grid",
  color: "black"
}).extend`
  grid-template-columns: 4rem 1fr;
  p {
    user-select: none;
    line-height: 1rem;
  }
`;

export default CuratorWrapper;
