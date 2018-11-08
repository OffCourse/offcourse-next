import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { mapIndexed, move } from "../helpers";
import { Input } from "@offcourse/atoms";
import { SortableList, LinkGroup } from "..";
import Handles from "./Handles";

const InputList = ({
  arrangeable,
  move,
  title,
  add,
  items,
  errors,
  touched,
  placeholder,
  remove,
  name,
  onChange,
  onBlur,
  FieldComponent
}) => {
  const links = [
    {
      onClick: add,
      title: title.slice(0, -1)
    }
  ];
  return (
    <Fragment>
      <SortableList onSort={move}>
        {mapIndexed((item, index) => {
          return (
            <FieldComponent
              value={item}
              onChange={onChange}
              onBlur={onBlur}
              hasErrors={touched[index] && !!errors[index]}
              mb={3}
              placeholder={placeholder}
              key={index}
              name={`${name}.${index}`}
            >
              {arrangeable && <Handles remove={remove} index={index} />}
            </FieldComponent>
          );
        }, items)}
      </SortableList>
      {arrangeable && (
        <LinkGroup pt={6} links={links} justifyContent="flex-end" />
      )}
    </Fragment>
  );
};

InputList.Input = Input;
InputList.move = move;

InputList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  errors: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
  touched: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  ),
  arrangeable: PropTypes.bool,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  add: PropTypes.func,
  remove: PropTypes.func,
  move: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  FieldComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

InputList.defaultProps = {
  arrangeable: false,
  placeholder: "edit this",
  errors: [],
  touched: [],
  items: [],
  FieldComponent: Input
};

export default InputList;
