import React from 'react';
import { Button } from '../';

export default { title: 'atoms.Button' };

export const plain = () => <Button>Hello</Button>;

export const colors = () =>
  <div>
    <Button bg="primary" label="Primary"/>
    <Button bg="dark" label="Dark"/>
    <Button bg="danger" label="Danger"/>
    <Button bg="success" label="Success"/>
    <Button bg="warning" color="text" label="Warning"/>
    <Button bg="light" color="text" label="Plain"/>
  </div>;

export const sizes = () =>
  <div>
    <Button fontSize="sm" label="Small"/>
    <Button fontSize="md" label="Medium"/>
    <Button fontSize="lg" label="Large"/>
    <Button fontSize="xl" label="X-Large"/>
  </div>;
