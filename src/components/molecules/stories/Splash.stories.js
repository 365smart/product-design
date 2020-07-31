import React from 'react';
import { Splash } from '..';
import { Img, Div, Button, Icon } from '../../atoms';
import { Itemaddremove } from '../../molecules';

export default { title: 'molecules.Splash' };

export const UpsaleSplash = () =>
    <Splash images={<Img variant="cover" name="doritos" location="Products/Upsales" fileType="jpg" />} />

export const ProductSplash = () =>
    <Splash images={<Img variant="cover" name="bella1" location="Products" fileType="jpg" />} />

export const AutoHeightVariant = () =>
    <Splash variant="autoHeight" images={<Img name="bella1" location="Products" fileType="jpg" />} />

export const WithControls = () =>
    <Splash images={<Img variant="cover" name="bella1" location="Products" fileType="jpg" />} >
        <Itemaddremove />
    </Splash>

