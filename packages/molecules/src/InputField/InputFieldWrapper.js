import system from "system-components";
import styled from "styled-components";

const InputFieldWrapper = system({ p: 0, flex: 1 });

export default styled(InputFieldWrapper)`
  .handlers {
    grid-area: input;
  }
`;
