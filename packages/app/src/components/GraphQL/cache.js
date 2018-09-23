import {
  IntrospectionFragmentMatcher,
  InMemoryCache
} from "apollo-cache-inmemory";
import { defaultDataIdFromObject } from "apollo-boost";
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
      default:
        return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

export default cache;
