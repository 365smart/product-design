import React from 'react';
import { Div } from './atoms';

function Body(props) {
    return (
      <Div
        bg="white"
        flex="1 1 auto"
        flexWrap="wrap"
        alignItems="flex-start"
        justify-content="center"
        fontSize="sm"
        lineHeight="sm"
        pb="50vh"
        {...props}>
          {props.children}
          {props.label}
      </Div>
    );
}

export default Body;
