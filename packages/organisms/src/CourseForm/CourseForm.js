import React, { Component } from "react";
import PropTypes from "prop-types";
import { CheckpointInput } from "@offcourse/molecules";
import { Form } from "..";
import Model from "./CourseModel";

export default class CourseForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    mode: PropTypes.oneOf(["create", "edit"]),
    course: PropTypes.shape({
      goal: PropTypes.string.isRequired,
      checkpoints: PropTypes.array,
      description: PropTypes.string
    })
  };

  static defaultProps = {
    mode: "create"
  };

  render() {
    const { mode, errors, course, onCancel, onSubmit } = this.props;
    const title = `${mode} Course`;
    return (
      <Form
        Model={Model}
        values={new Model(course)}
        errors={errors}
        mode={mode}
        title={title}
        onSubmit={onSubmit}
        onCancel={onCancel}
      >
        <Form.Field title="Goal" name="goal" placeholder="Goal" />
        <Form.FieldList
          title="Checkpoints"
          emptyItem={new Model.Checkpoint()}
          name="checkpoints"
          FieldComponent={CheckpointInput}
        />
        <Form.Field
          variant="textarea"
          title="Description"
          name="description"
          placeholder="Course Description"
        />
      </Form>
    );
  }
}
