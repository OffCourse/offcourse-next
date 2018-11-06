import { memo } from "react";
import system from "system-components";

const Text = system({ is: "p", lineHeight: 3, fontSize: 2 });
export default memo(Text);
