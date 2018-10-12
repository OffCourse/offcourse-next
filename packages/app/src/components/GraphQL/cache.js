import {
  IntrospectionFragmentMatcher,
  defaultDataIdFromObject,
  InMemoryCache
} from "apollo-cache-inmemory";
import introspectionQueryResultData from "../../../fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({
  fragmentMatcher,
  dataIdFromObject: object => {
    switch (object.__typename) {
      case "Course":
        return object.courseId;
      case "Checkpoint":
        return object.checkpointId;
      case "Resource":
        return object.resourceUrl;
      default:
        return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

export default cache;
