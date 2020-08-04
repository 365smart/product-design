import React from 'react';
import { Header } from '..';

export default { title: 'Header' };

export const Brand1Example = () =>
  <Header logoName="365Dining" logoLocation="Diners/Logos" logoFileType="png" bgName="365Dining" bgLocation="Diners/BG" status="Opens at 10:00 AM" bgFileType="jpg" />

export const Brand2Example = () =>
  <Header logoName="Angelos" logoLocation="Diners/Logos" logoFileType="png" bgName="Angelos" bgLocation="Diners/BG" status="Opens at 9:30 AM" bgFileType="jpg" />
