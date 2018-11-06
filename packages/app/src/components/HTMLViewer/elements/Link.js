import { memo } from "react";
import system from "system-components";

const Link = system({
  is: "a",
  color: "black"
});

export default memo(Link);
