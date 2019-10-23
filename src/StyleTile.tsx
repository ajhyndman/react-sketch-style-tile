import React from 'react';
import { Artboard, View, Text } from 'react-sketchapp';

import Swatch from './Swatch';
import { textColor } from './utils';

type TextStyle = {
  fontFamily: string;
  fontSize: number;
};

interface StyleTileProps {
  background: string;
  colors: string[];
  headings: TextStyle[];
  bodyFont: TextStyle;
}

const HEADING_LINE_HEIGHT = 1.2;
const BODY_LINE_HEIGHT = 1.4;

const StyleTile = ({
  background,
  colors,
  headings,
  bodyFont,
}: StyleTileProps) => {
  const color = textColor(background);

  return (
    <Artboard
      name="StyleTile"
      style={{
        backgroundColor: background,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 600,
        padding: 16,
      }}
    >
      <View style={{ flexGrow: 1, flexShrink: 1 }}>
        {headings.map((heading, i) => (
          <Text
            style={{
              color,
              fontFamily: heading.fontFamily,
              fontSize: heading.fontSize,
              lineHeight: heading.fontSize * HEADING_LINE_HEIGHT,
              marginBottom: heading.fontSize / 3,
            }}
          >
            {`Heading ${i + 1}`}
          </Text>
        ))}
        <Text
          style={{
            color,
            fontFamily: bodyFont.fontFamily,
            fontSize: bodyFont.fontSize,
            lineHeight: bodyFont.fontSize * BODY_LINE_HEIGHT,
          }}
        >
          Loomings call me because there by his guttural noises from thence.
          Call me because from Labrador or pipe and his trees each. Ishmael
          bloody battle in as Iceland no I soon an inkling. Some difficulty
          having opened a hamper being just then the thought. Years ago did not
          know how all but well I made.
        </Text>
      </View>

      <View style={{ flexDirection: 'column' }}>
        {colors.map(color => (
          <Swatch background={background} hex={color} key={color} />
        ))}
      </View>
    </Artboard>
  );
};

export default StyleTile;
