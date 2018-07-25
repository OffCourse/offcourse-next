import { Query as ApolloQuery } from "react-apollo";
import { identity } from "ramda";
import { Loading } from "@offcourse/atoms";

export default class Query extends React.Component {
  render() {
    const { children = identity, query, variables, pollInterval } = this.props;
    return (
      <ApolloQuery query={query} variables={variables} pollInterval={pollInterval}>
        {({ loading, error, ...rest }) => {
          if (loading) return <Loading size="large" />;
          if (error) {
            console.log(error);
            return <Loading size="large" />;
          }
          return children({ ...rest });
        }}
      </ApolloQuery>
    );
  }
}
