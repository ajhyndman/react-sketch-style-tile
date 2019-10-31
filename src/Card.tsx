import React from 'react';
import { View, Text } from 'react-sketchapp';
import { TypefaceStyle } from './StyleTile';

type Props = {
  background: string;
  color: string;
  bodyFont: TypefaceStyle;
  titleFont: TypefaceStyle;
};

const Card = ({ background, color, bodyFont, titleFont }: Props) => (
  <View style={{ backgroundColor: background, padding: 16, borderRadius: 1 }}>
    <View style={{ height: 75 }} />
    <Text style={{...titleFont, color}}>Card Title</Text>
    <Text style={{ ...bodyFont, color }}>
      Some difficulty having opened a hamper being just then the thought.
    </Text>
    <Text style={{ ...bodyFont, color }}>{'See more \u203A'}</Text>
  </View>
);

export default Card;