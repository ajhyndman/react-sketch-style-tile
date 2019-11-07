import React from 'react';
import { render } from 'react-sketchapp';

import StyleTile from './StyleTile';

const COLOR_LIST = [
  '#ffffff',
  // '#DA98A1',
  // '#FFCD45',
  '#FFD969',
  // '#665830',
  // '#9F8DC2',
  // '#9567D3',
  '#222530',
  '#4E5261',
  '#3E414D',
  '#242733',
];

const HEADINGS = [
  {
    fontFamily: 'Montserrat',
    // fontFamily: 'Cabin',
    // fontFamily: 'Questrial',
    // fontFamily: 'Fredericka the Great',
    fontSize: 32,
    // color: '#FFD969',
    fontWeight: '600',
  },
  {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '600',
    // color: '#FFD969',
    // textTransform: 'uppercase',
  },
];

const BACKGROUND = COLOR_LIST[5];

const BODY_FONT = {
  // fontFamily: 'Red Hat Display',
  // fontFamily: 'Futura',
  // fontFamily: 'Raleway',
  fontFamily: 'Muli',
  fontSize: 14,
};

export default () => {
  render(
    <StyleTile
      background={BACKGROUND}
      highlight={COLOR_LIST[1]}
      accent={COLOR_LIST[3]}
      colors={COLOR_LIST}
      headings={HEADINGS}
      bodyFont={BODY_FONT}
    />,
    context.document.currentPage(),
  );
};
