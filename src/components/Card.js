import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 8px;
  display: flex;
  flex: 0 1 auto;
  width:33.3333%;
  min-width:320px;
  max-width:374px;
  height:256px;
  align-items: center;
  justify-content: center;
  background-color:$myColor;
  box-sizing: border-box;
  .card{
    background:#ffffff;
    border-radius:16px;
    border:1px solid #C5C5C9;
    width:100%;
    height:100%;
    //   @media only screen and (max-width: 768px) {
//     background-color:red;
//   }
}
`;

function Card(props) {
    return (
        <Div {...props}>
            <div class="card">

            </div>
        </Div>
    );
}

export default Card;
