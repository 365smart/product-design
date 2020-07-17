import React from 'react';
import { Div, Button, Icon } from '../';
import { Slide } from '../../molecules';
export default { title: 'atoms.Div' };

export const basic = () =>
    <Div>Hello</Div>;

export const smDietary = () =>
    <Div variant="smDietary">888 CAL</Div>
    ;

export const controlsTR = () =>
    <div style={{ position: 'relative', backgroundColor: 'grey', height: '200px', width: '400px' }}>
        <Div variant="controlsTR">
            <Button variant="controlGhostDark"><Icon variant="forControls" name="info" /></Button>
            <Button variant="control" ><Icon variant="forControls" name="add" /></Button>
        </Div>
    </div >
    ;
export const slideZone = () =>
    <Div variant="slideZone">
        <div style={{ backgroundColor: 'grey', minHeight: '200px', minWidth: '400px', margin: '16px' }} />
        <div style={{ backgroundColor: 'grey', minHeight: '200px', minWidth: '400px', margin: '16px' }} />
        <div style={{ backgroundColor: 'grey', minHeight: '200px', minWidth: '400px', margin: '16px' }} />
        <div style={{ backgroundColor: 'grey', minHeight: '200px', minWidth: '400px', margin: '16px' }} />
    </Div>

    ;
