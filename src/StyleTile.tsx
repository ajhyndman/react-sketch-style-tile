import React from 'react';
import { Artboard, View, Text, TextStyle } from 'react-sketchapp';

import Swatch from './Swatch';
import { textColor } from './utils';
import Button from './Button';
import Card from './Card';

export type TypefaceStyle = {
  fontFamily: string;
  fontSize: number;
  fontWeight?: string;
} & Partial<StyleTileProps>;

interface StyleTileProps {
  background: string;
  highlight: string;
  colors: string[];
  headings: TypefaceStyle[];
  bodyFont: TypefaceStyle;
}

const HEADING_LINE_HEIGHT = 1.2;
const BODY_LINE_HEIGHT = 1.4;

const StyleTile = ({
  background,
  colors,
  headings,
  bodyFont,
  highlight,
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
          <View
            style={{
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                color,
                lineHeight: heading.fontSize * HEADING_LINE_HEIGHT,
                ...heading,
              }}
            >
              {`Heading ${i + 1}`}
            </Text>
            <Text style={{ color, fontSize: 10 }}>{`${heading.fontFamily} ${(
              heading.fontWeight || 400
            ).toString()} ${heading.fontSize.toString()}pt`}</Text>
          </View>
        ))}

        <Text
          style={{
            color,
            lineHeight: bodyFont.fontSize * BODY_LINE_HEIGHT,
            ...bodyFont,
          }}
        >
          Loomings call me because there by his guttural noises from thence.
          Call me because from Labrador or pipe and his trees each. Ishmael
          bloody battle in as Iceland no I soon an inkling. Some difficulty
          having opened a hamper being just then the thought. Years ago did not
          know how all but well I made.
        </Text>
        <Text style={{ color, fontSize: 10 }}>{`${bodyFont.fontFamily} ${(
          bodyFont.fontWeight || 400
        ).toString()} ${bodyFont.fontSize.toString()}pt`}</Text>

        <View style={{ flexDirection: 'row' }}>
          {/* buttons */}
          <View
            style={{
              flexBasis: 0,
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'space-around',
              padding: 24,
            }}
          >
            <Button background={highlight} fontFamily={bodyFont.fontFamily}>
              Primary Button
            </Button>
            <Button background={colors[3]} fontFamily={bodyFont.fontFamily}>
              Secondary Button
            </Button>
          </View>

          {/* cards */}
          <View
            style={{
              alignItems: 'center',
              flexBasis: 0,
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'space-around',
              padding: 24,
            }}
          >
            <Card background={colors[0]} color={colors[5]} bodyFont={bodyFont} titleFont={headings[1]} />
          </View>
        </View>
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
