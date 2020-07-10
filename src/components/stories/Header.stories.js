import React from 'react';
import { Header } from '../';

export default { title: 'Header' };

export const branding = () =>
  <div>
    <Header name="365Dining" status="Open at 10:00 AM"/>;
    <Header name="FlavorTown" status="Open at 4:20 PM"/>;
  </div>
