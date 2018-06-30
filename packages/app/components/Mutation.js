import { Mutation as ApolloMutation } from "react-apollo";
import { identity } from "ramda";
import { Loading } from "@offcourse/atoms";

export default class Mutation extends React.Component {
  render() {
    const { children = identity, mutation, variables } = this.props;
    return (
      <ApolloMutation mutation={mutation} variables={variables}>
        {(fn, { loading, error, ...rest }) => {
          if (loading) return <Loading size="large" />;
          if (error) return <Loading size="large" />;
          return children(fn, { ...rest });
        }}
      </ApolloMutation>
    );
  }
}
