import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import Slider from "rn-range-slider";

import Thumb from "../../Slider/Thumb";
import Rail from "../../Slider/Rail";
import RailSelected from "../../Slider/RailSelected";
import Notch from "../../Slider/Notch";
import Label from "../../Slider/Label";
import TextButton from "../components/TextButton";

import styles from "./styles";

const SliderScreen = () => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10000);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const [floatingLabel, setFloatingLabel] = useState(true);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  function lowNumberWithCommas() {
    return low.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function highNumberWithCommas() {
    return high.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <View style={styles.root}>
      <Slider
        style={styles.slider}
        min={min}
        max={max}
        step={1}
        disableRange={rangeDisabled}
        floatingLabel={floatingLabel}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <View style={styles.horizontalContainer}>
        <Text style={styles.valueText}>{lowNumberWithCommas()}</Text>
        <Text style={styles.valueText}>{highNumberWithCommas()}</Text>
      </View>
    </View>
  );
};

export default SliderScreen;
