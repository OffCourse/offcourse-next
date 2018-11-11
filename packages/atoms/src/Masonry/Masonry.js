import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { MasonryWrapper } from "./MasonryWrapper";
import { getColumns, prepareGrid } from "./helpers";
import Grid from "./Grid";

class Masonry extends PureComponent {
  state = { numberOfColumns: 1 };

  handleResize = () => {
    if (!this.masonry) return null;
    const { onResize, breakpoints } = this.props;
    const { offsetWidth } = this.masonry;
    const proposal = getColumns(offsetWidth, breakpoints);
    this.setState(
      () => {
        return { numberOfColumns: proposal };
      },
      () => {
        return onResize({ width: offsetWidth, numberOfColumns: proposal });
      }
    );
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  renderGrid() {
    if (!this.masonry) {
      return null;
    }

    const { children } = this.props;
    const { numberOfColumns } = this.state;

    const grid = prepareGrid(children, numberOfColumns);
    return <Grid grid={grid} />;
  }

  render() {
    return (
      <MasonryWrapper
        ref={el => {
          this.masonry = el;
        }}
      >
        {this.renderGrid()}
      </MasonryWrapper>
    );
  }
}

Masonry.propTypes = {
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  onResize: PropTypes.func,
  children: PropTypes.node.isRequired
};

Masonry.defaultProps = {
  breakpoints: [],
  onResize: identity
};

export default Masonry;
