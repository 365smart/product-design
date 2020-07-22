import React from 'react';
import { Title } from '..';

export default { title: 'atoms.Title' };

export const variants = () =>
  <div>
    <Title variant="mdHead" >24px Head (md)</Title>
    <Title variant="xxlHead" >64px Head (xxl)</Title>
  </div>;

