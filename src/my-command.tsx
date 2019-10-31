import React from 'react';
import { render } from 'react-sketchapp';

import StyleTile from './StyleTile';

const COLOR_LIST = [
  '#eaeaea',
  '#e4d7c4',
  '#9b7f62',
  '#8b6247',
  '#1f2224',
];

const HEADINGS = [
  {
    // fontFamily: 'Montserrat',
    // fontFamily: 'Cabin',
    // fontFamily: 'Questrial',
    fontFamily: 'Red Hat Display',
    fontSize: 32,
    fontWeight: '600',
  },
  {
    fontFamily: 'Red Hat Display',
    fontSize: 24,
    fontWeight: '600',
    // textTransform: 'uppercase',
  },
];

const BACKGROUND = COLOR_LIST[4];

const BODY_FONT = { fontFamily: 'Red Hat Display', fontSize: 14 };

export default () => {
  render(
    <StyleTile
      background={BACKGROUND}
      highlight={COLOR_LIST[2]}
      colors={COLOR_LIST}
      headings={HEADINGS}
      bodyFont={BODY_FONT}
    />,
    context.document.currentPage(),
  );
};
