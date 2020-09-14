import * as React from 'react';
import s from 'styled-components';

const FillerText = s.p`
  padding: 1rem;
  padding-right: 4rem;
  padding-left: 2rem;
  font-size: 18px;
  line-height: 1.6em;
  margin:0;
`;

const PlaceHolderText = (): React.ReactElement => (
  <FillerText>
    Consectetur anim fugiat Lorem cupidatat nostrud ea nostrud cupidatat commodo
    nulla laborum tempor minim irure. Commodo nisi consequat sit in. Cillum
    nulla voluptate in est eiusmod ut consectetur voluptate consectetur tempor
    cillum proident.
  </FillerText>
);

export default PlaceHolderText;
