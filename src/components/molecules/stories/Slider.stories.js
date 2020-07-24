import React from 'react';
import { Slider, Slideset } from '..';
export default { title: 'molecules.Slider' };

export const DinerSlider = () =>
    <Slider sliderMessage="Tap for more choices"><Slideset slideSet='diners' /></Slider>

export const ProductSlider = () =>
    <Slider sliderMessage="You might want to add"><Slideset slideSet='products' /></Slider>



