import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import memesSons1 from "../../../../Assets/Images/MemesSons/MM1.png";
import memesSons2 from "../../../../Assets/Images/MemesSons/MM2.png";
import memesSons3 from "../../../../Assets/Images/MemesSons/MM3.png";
import memesSons4 from "../../../../Assets/Images/MemesSons/MM4.png";

const Task = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 15}%)`,
  }),
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -90vh;
  left: 0vw;
  /* border: 1px dashed red; */
  height: 80vh;
`;

const Alert = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 8}%) scale(0.9)`,
  }),
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -45vh;
  right: 2vw;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.6px);
`;

const CustomerDetail = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 5}%) scale(0.7)`,
  }),
})`
  transition: transform 0.2s ease-out;
  bottom: -75vh;
  left: 2vw;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.8px);
`;

const Customers = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 2}%) scale(0.6)`,
  }),
})`
  transition: transform 0.2s ease-out;
  bottom: -55vh;
  right: 5vw;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(1.2px);
`;

class LashicImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const { boxHeight, index, scrollHeight, screenHeight } = this.props;
    const heighttoBeReducedinVH = boxHeight * index - 100;
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent =
      (scrollOffset * 100) / scrollHeight + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <CustomerDetail
          src={memesSons4}
          scroll={scrollPercent}
          alt="customerDetails"
        />
        <Customers src={memesSons2} scroll={scrollPercent} alt="customers" />
        <Alert src={memesSons3} scroll={scrollPercent} alt="Alert" />
        <Task src={memesSons1} scroll={scrollPercent} alt="Task" />
      </React.Fragment>
    );
  }
}

LashicImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default LashicImages;
