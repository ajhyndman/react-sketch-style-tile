import React from 'react';
import { Text, View } from 'react-sketchapp';

import { textColor } from './utils';

interface SwatchProps {
  name: string;
  hex: string;
}
const Swatch = ({ name, hex }: SwatchProps) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 9,
      shadowOpacity: 0.25,
    }}
  >
    <Text
      name="Swatch Name"
      style={{ color: textColor(hex), fontWeight: 'bold' }}
    >
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: textColor(hex) }}>
      {hex}
    </Text>
  </View>
);

export default Swatch;
