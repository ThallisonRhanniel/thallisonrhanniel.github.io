import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import teslaTyreImg from "../../../../Assets/Images/Tesla/Tyre.png";
import teslaHeatImg from "../../../../Assets/Images/Tesla/Heat.png";
import teslaLockImg from "../../../../Assets/Images/Tesla/Lock.png";
import teslaBatteryImg from "../../../../Assets/Images/Tesla/Battery.png";

import appDj1 from "../../../../Assets/Images/AppDJ/APPDJ1.png";
import appDj2 from "../../../../Assets/Images/AppDJ/APPDJ2.png";
import appDj3 from "../../../../Assets/Images/AppDJ/APPDJ3.png";

const Heat = styled.img.attrs({
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

const Tyre = styled.img.attrs({
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

const Battery = styled.img.attrs({
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

const Lock = styled.img.attrs({
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

class TeslaImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const { boxHeight, index, scrollHeight, screenHeight } = this.props;
    const heighttoBeReducedinVH = boxHeight * index - 100;
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent =
      (scrollOffset * 100) / scrollHeight + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        {/* <Lock src={appDj1} scroll={scrollPercent} alt="teslaLock" /> */}
        <Battery src={appDj2} scroll={scrollPercent} alt="teslaBattery" />
        <Tyre src={appDj3} scroll={scrollPercent} alt="teslaTyre" />
        <Heat src={appDj1} scroll={scrollPercent} alt="teslaHeat" />
      </React.Fragment>
    );
  }
}

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TeslaImages;
