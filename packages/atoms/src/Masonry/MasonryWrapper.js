import styled from "styled-components";
import system from "system-components";

const MasonryWrapper = system({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  width: "100%"
});

const ColumnWrapper = system({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignContent: "stretch",
  width: ["100%", "auto", "auto"]
});

const ItemWrapper = system({
  mb: 6,
  mr: [0, 6, 6]
});

export { MasonryWrapper, ColumnWrapper, ItemWrapper };
