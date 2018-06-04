import system from "system-components";

const InputFieldWrapper = system({ p: 0 }).extend`
  .handlers {
    grid-area: input;
  }
`;

export default InputFieldWrapper;
