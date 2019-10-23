import React from 'react';
import { Text, View } from 'react-sketchapp';

import { textColor } from './utils';

interface SwatchProps {
  background: string;
  hex: string;
}

const WIDTH = 100;
const HEIGHT = 60;
const GUTTER = 4;

const Swatch = ({ background, hex }: SwatchProps) => (
  <View
    style={{
      backgroundColor: background,
      margin: GUTTER,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 9,
      shadowOpacity: 0.25,
    }}
    name={`Swatch ${hex}`}
  >
    <View
      style={{
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: hex,
      }}
    ></View>
    <View style={{ padding: GUTTER }} name="Swatch">
      {/* <Text
        name="Swatch Name"
        style={{ fontWeight: 'bold' }}
      >
        {name}
      </Text> */}
      <Text
        name="Swatch Hex"
        style={{ color: textColor(background), textAlign: 'center' }}
      >
        {hex}
      </Text>
    </View>
  </View>
);

export default Swatch;
