import React from 'react';
import { Text, View } from 'react-sketchapp';

interface SwatchProps {
  hex: string;
}

const WIDTH = 100;
const HEIGHT = 60;
const GUTTER = 4;

const Swatch = ({ hex }: SwatchProps) => (
  <View
    style={{
      margin: GUTTER,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 9,
      shadowOpacity: 0.25,
    }}
  >
    <View
      name={`Swatch ${hex}`}
      style={{
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: hex,
      }}
    ></View>
    <View style={{ padding: GUTTER }}>
      {/* <Text
        name="Swatch Name"
        style={{ fontWeight: 'bold' }}
      >
        {name}
      </Text> */}
      <Text name="Swatch Hex" style={{ textAlign: 'center' }}>
        {hex}
      </Text>
    </View>
  </View>
);

export default Swatch;
