import React from 'react';
import { render } from 'react-sketchapp';

import StyleTile from './StyleTile';

const COLOR_LIST = ['#F3F4F4', '#333', '#96DBE4', '#24828F', '#EFADA0'];

const HEADINGS = [
  {
    fontFamily: 'Cinzel',
    fontSize: 32,
  },
  {
    fontFamily: 'Cinzel',
    fontSize: 24,
  },
  {
    fontFamily: 'Cinzel',
    fontSize: 16,
  },
];

const BACKGROUND = '#EEE';

const BODY_FONT = { fontFamily: 'American Typewriter', fontSize: 14 };

export default () => {
  render(
    <StyleTile
      background={BACKGROUND}
      colors={COLOR_LIST}
      headings={HEADINGS}
      bodyFont={BODY_FONT}
    />,
    context.document.currentPage(),
  );
};
