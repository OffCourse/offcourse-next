import { memo } from "react";
import system from "system-components";

const Image = system({
  is: "img",
  maxWidth: "100%",
  maxHeight: "100%"
});

export default memo(Image);
