import React from 'react';
import { Text } from '../';

export default { title: 'atoms.Text' };

export const plain = () => <Text value="Press Me"/>;

export const fontSizes = () =>
  <div>
    <Text fontSize="xxs" value="12px (xxs)"/>
    <Text fontSize="xs" value="14px (xs)"/>
    <Text fontSize="sm" value="18px (sm)"/>
    <Text fontSize="md" value="24px (md)"/>
    <Text fontSize="lg" value="32px (lg)"/>
    <Text fontSize="xl" value="42px (xl)"/>
    <Text fontSize="xxl" value="64px (xxl)"/>
    <Text fontSize="xxxl" value="96px (xxxl)"/>
  </div>;

export const colors = () =>
  <div>
    <Text color="text" value="Default"/>
    <Text color="secondaryText" value="Secondary"/>
    <Text color="primary" value="Brand"/>
    <Text bg="dark" color="light" value="Light"/>
  </div>;
