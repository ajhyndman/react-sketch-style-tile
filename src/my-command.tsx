import React from 'react';
import { render } from 'react-sketchapp';

import StyleTile from './StyleTile';

const COLOR_LIST = [
  '#ffffff',
  '#DA98A1',
  '#9567D3',
  '#4D5679',
  '#394466',
  '#1A2037',
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

const BACKGROUND = COLOR_LIST[5];

const BODY_FONT = { fontFamily: 'Red Hat Display', fontSize: 14 };

export default () => {
  render(
    <StyleTile
      background={BACKGROUND}
      highlight={COLOR_LIST[2]}
      accent={COLOR_LIST[3]}
      colors={COLOR_LIST}
      headings={HEADINGS}
      bodyFont={BODY_FONT}
    />,
    context.document.currentPage(),
  );
};
