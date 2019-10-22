import React from 'react';
import { Artboard, View, Text } from 'react-sketchapp';

import Swatch from './Swatch';

interface StyleTileProps {
  colors: { [key: string]: string };
  headingFont: string;
  bodyFont: string;
}

const HEADING_LINE_HEIGHT = 1.2;
const BODY_LINE_HEIGHT = 1.4;

const StyleTile = ({ colors, headingFont, bodyFont }: StyleTileProps) => (
  <Artboard
    name="StyleTile"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 600,
      padding: 16,
    }}
  >
    <View style={{ flexGrow: 1, flexShrink: 1, }}>
      <Text
        style={{
          fontFamily: headingFont,
          fontSize: 32,
          lineHeight: 32 * HEADING_LINE_HEIGHT,
        }}
      >
        Heading 1
      </Text>
      <Text
        style={{
          fontFamily: headingFont,
          fontSize: 24,
          lineHeight: 24 * HEADING_LINE_HEIGHT,
        }}
      >
        Heading 2
      </Text>
      <Text
        style={{
          fontFamily: headingFont,
          fontSize: 16,
          lineHeight: 16 * HEADING_LINE_HEIGHT,
        }}
      >
        Heading 3
      </Text>
      <Text
        style={{
          fontFamily: bodyFont,
          fontSize: 14,
          lineHeight: 14 * BODY_LINE_HEIGHT,
        }}
      >
        Loomings call me because there by his guttural noises from thence. Call
        me because from Labrador or pipe and his trees each. Ishmael bloody
        battle in as Iceland no I soon an inkling. Some difficulty having opened
        a hamper being just then the thought. Years ago did not know how all but
        well I made.
      </Text>
    </View>

    <View style={{ flexDirection: 'column' }}>
      {Object.keys(colors).map(color => (
        <Swatch name={color} hex={colors[color]} key={color} />
      ))}
    </View>
  </Artboard>
);

export default StyleTile;
