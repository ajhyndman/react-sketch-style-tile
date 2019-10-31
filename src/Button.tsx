import React, { ReactNode } from 'react';
import { View, Text } from 'react-sketchapp';
import { textColor } from './utils';

type Props = {
  background: string;
  children: string;
  fontFamily: string;
}

const Button = ({ background, children, fontFamily }: Props) => (
  <View
    style={{
      alignItems: 'center',
      backgroundColor: background,
      borderRadius: 1,
      flexDirection: 'row',
      height: 39,
      justifyContent: 'center',
      paddingHorizontal: 16,
    }}
  >
    <Text
      style={{
        textAlign: 'center',
        color: textColor(background),
        fontFamily,
        fontSize: 14,
      }}
    >
      {children}
    </Text>
  </View>
);

export default Button;
