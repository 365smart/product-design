import React from 'react';
import { Button } from '../';

export default { title: 'Button' };

export const withText = () => <Button label="Press Me"/>;

export const withBgColor = () => <Button bgColor="red" label="Press Me"/>;
