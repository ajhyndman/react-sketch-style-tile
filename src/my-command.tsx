import React from 'react';
import { render } from 'react-sketchapp';

import StyleTile from './StyleTile';

const COLOR_LIST = {
  Haus: '#F3F4F4',
  Night: '#333',
  Sur: '#96DBE4',
  'Sur Dark': '#24828F',
  Peach: '#EFADA0',
};

export default () => {
  render(
    <StyleTile
      colors={COLOR_LIST}
      headingFont="Cinzel"
      bodyFont="American Typewriter"
    />,
    context.document.currentPage(),
  );
};
