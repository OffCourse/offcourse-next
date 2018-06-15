import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MasonryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  width: 100%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  flex-grow: 1;
`;

const ItemWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default class Masonry extends React.Component {
  static defaultProps = {
    breakpoints: [624, 928]
  };

  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  getColumns(w) {
    const { breakpoints } = this.props;
    return (
      breakpoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, breakpoints.length) + 1
    );
  }

  onResize = () => {
    const columns = this.getColumns(this.masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns });
    }
  };

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }

  render() {
    return (
      <MasonryWrapper
        innerRef={r => {
          this.masonry = r;
        }}
      >
        {this.mapChildren().map((col, ci) => {
          return (
            <ColumnWrapper className="column" key={ci}>
              {col.map((child, i) => {
                return <ItemWrapper key={i}>{child}</ItemWrapper>;
              })}
            </ColumnWrapper>
          );
        })}
      </MasonryWrapper>
    );
  }
}
