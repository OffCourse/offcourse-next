import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { mapIndexed, move } from "../helpers";
import { Input } from "@offcourse/atoms";
import { SortableList, IconGroup, LinkGroup } from "..";

export default class InputList extends Component {
  static Input = Input;
  static move = move;

  static propTypes = {
    /** list of elements that need to be entered */
    items: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    /** list of errors corresponding to these items */
    errors: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ),
    /** field that indicates if the form itself is arrangeable (add, remove, move, etc...) */
    arrangeable: PropTypes.bool,
    /** title of the field (i.e. label) */
    title: PropTypes.string.isRequired,
    /** name of the field */
    name: PropTypes.string.isRequired,
    /** placeholder for the value of the field */
    placeholder: PropTypes.string,
    /** function that adds a new items to the list */
    add: PropTypes.func,
    /** function that removes an item from the list */
    remove: PropTypes.func,
    /** function that moves an item to another position */
    move: PropTypes.func,
    /** handler for when a list value changes */
    onChange: PropTypes.func.isRequired,
    /** handler for when a field loses focus */
    onBlur: PropTypes.func,
    /** optional component that can be rendered instead of the default one */
    FieldComponent: PropTypes.func
  };

  static defaultProps = {
    arrangeable: false,
    placeholder: "edit this",
    errors: [],
    items: [],
    FieldComponent: Input
  };

  renderHandles(index) {
    const { arrangeable, remove, move } = this.props;
    const icons = [
      {
        is: "button",
        onClick: () => remove(index),
        name: "remove",
        tabIndex: "-1"
      },
      { is: "button", name: "sort", tabIndex: "-1" }
    ];
    return (
      <IconGroup
        icons={icons}
        color="grayScale.2"
        direction="vertical"
        size="small"
      />
    );
  }

  renderFields() {
    const {
      arrangeable,
      items,
      errors,
      placeholder,
      name,
      onChange,
      onBlur,
      FieldComponent
    } = this.props;
    return mapIndexed((item, index) => {
      return (
        <FieldComponent
          value={item}
          onChange={onChange}
          onBlur={onBlur}
          hasErrors={!!errors[index]}
          mb={3}
          placeholder={placeholder}
          key={index}
          name={`${name}.${index}`}
        >
          {arrangeable && this.renderHandles(index)}
        </FieldComponent>
      );
    }, items);
  }

  renderLinks() {
    const { arrangeable, title, add } = this.props;
    return (
      arrangeable && (
        <LinkGroup pt={6} justifyContent="flex-end">
          <LinkGroup.Link onClick={add}>{`Add ${title.slice(
            0,
            -1
          )}`}</LinkGroup.Link>
        </LinkGroup>
      )
    );
  }

  render() {
    const { move } = this.props;
    return (
      <Fragment>
        <SortableList onSort={move}>{this.renderFields()}</SortableList>
        {this.renderLinks()}
      </Fragment>
    );
  }
}
