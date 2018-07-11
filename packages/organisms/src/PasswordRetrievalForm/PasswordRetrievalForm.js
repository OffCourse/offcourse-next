import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { PasswordInput } from "@offcourse/molecules";
import { Form } from "..";
import Model from "./PasswordRetrievalModel";

class PasswordRetrievalForm extends Component {
  static propTypes = {
    /** callback that triggers when the form is submitted */
    onSubmit: PropTypes.func.isRequired,
    /** callback that triggers when the form is cancelled */
    onCancel: PropTypes.func,
    /** optional initial username */
    userName: PropTypes.string,
    /** object with external errors */
    errors: PropTypes.shape({
      userName: PropTypes.string,
      confirmationCode: PropTypes.string,
      password: PropTypes.string
    }),
    /** flag that indicates confirmMode */
    mode: PropTypes.oneOf(["confirm", "normal"]),
    /** object that defines the links to other forms */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const { mode, userName, onSubmit, onCancel, links, errors } = this.props;
    return (
      <Form
        Model={Model}
        values={new Model({ userName })}
        errors={errors}
        mode={mode}
        links={links}
        onSubmit={onSubmit}
        onCancel={onCancel}
        title="Retrieve Password"
      >
        <Form.Field
          title="User Name"
          disabled={mode === "confirm"}
          unformatted
          name="userName"
          placeholder="User Name"
        />
        {mode === "confirm" && (
          <Fragment>
            <Form.Field
              unformatted
              title="Confirmation Code"
              name="confirmationCode"
              placeholder="Confirmation Code"
            />
            <Form.Field
              unformatted
              title="New Password"
              type="password"
              FieldComponent={PasswordInput}
              name="password"
              placeholder="Password"
            />
          </Fragment>
        )}
      </Form>
    );
  }
}

export default PasswordRetrievalForm;
