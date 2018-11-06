import React, { memo } from "react";

const Code = ({ children, style, ...rest }) => {
  return (
    <code
      style={{
        ...style,
        wordBreak: "break-word",
        whiteSpace: "normal"
      }}
      {...rest}
    >
      {children}
    </code>
  );
};

export default memo(Code);
