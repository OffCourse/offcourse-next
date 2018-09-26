import system from "system-components";

const TextWrapper = system({
  is: "p",
  m: 0,
  p: 0,
  fontSize: 1,
  lineHeight: 1
}).extend` 
  word-break: break-word;
`;

export default TextWrapper;
