import React from 'react';
import { Header } from '../';

export default { title: 'Header' };

export const withText = () => <Header label="Header"/>;

export const withBgColor = () => <Header bgColor="hotpink" label="Hot Pink Header"/>;
