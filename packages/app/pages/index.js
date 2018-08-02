import Layout from "../components/Layout";
import { CoursesContainer } from "../containers";
import {
  CourseCardContext,
  CourseCollectionContext
} from "../contexts";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <CourseCardContext>
          <CourseCollectionContext>
            <CoursesContainer />
          </CourseCollectionContext>
        </CourseCardContext>
      </Layout>
    );
  }
}
