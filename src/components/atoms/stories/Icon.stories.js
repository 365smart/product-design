import React from 'react';
import { Icon, Button } from '..';
export default { title: 'atoms.Icon' };

export const plain = () => <Icon name="barcode" />;
export const allIcons = () =>
  <div style={{ backgroundColor: "black" }}>
    <Icon name="barcode" />
    <Icon name="card" />
    <Icon name="fingerprint" />
    <Icon name="help" />
  </div >;
export const micon = () =>
  <Icon name="nogluten" variant="sm" />
  ;
export const forControls = () =>
  <Button variant="control">
    <Icon name="info" variant="forControls" />
  </Button>
  ;

