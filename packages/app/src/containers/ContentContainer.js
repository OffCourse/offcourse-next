import * as content from "../content";

const ContentContainer = ({ term, children }) => {
  return children(content[term]);
};

export default ContentContainer;
