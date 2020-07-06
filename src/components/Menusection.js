import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: flex-start;
  justify-content: center;
  width:100%;
  h1{
      display:flex;
      width:100%;
      padding:32px;
      height:160px;
      font-size: 64px;
      margin:0px;
      justify-content:flex-start;
      align-items:center;
  }
  .carddeck{
      padding:24px;
      display:flex;
      flex-wrap:wrap;
      flex:1 1 auto;
      width:100%;
      justify-content:center;
  }
`;


function Menusection(props) {
    return (
        <Div {...props}>
            {props.children}
            <h1>{props.name}</h1>
            <div class="carddeck">
                <Card>test1</Card>
                <Card>test1</Card>
                <Card>test1</Card>
                <Card>test1</Card>
                <Card>test1</Card>
                <Card>test1</Card>
                <Card>test1</Card>
                <Card>test1</Card>
            </div>
        </Div>
    )
}

export default Menusection;
