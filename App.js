import React from 'react';
import { Image, View, Text } from 'react-native';
import styled from 'styled-components/native';

const Div = styled.View`
  width: 150px;
  height: 150px;
  flex-direction: row;
  justify-content: center;
`;
const Quadrado = styled.View`
  width: 150px;
  height:150px;
  
`;
const Externo = styled.View`
width: 150px;
height:150px;
`;
const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const P = styled.Text`
  color: red;
  font-size: 20px;
`;
export default function App() {
  return (
    <Body>
      <P>Galeria do Helbert Wagner Sales Lemos</P>
      <P>Tema: trollge</P>
      <Div>
        <Quadrado>
          <Image source={require('./src/images/1.png')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
        <Quadrado>
          <Image source={require('./src/images/2.png')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
      </Div>
      <Div>
      <Quadrado>
          <Image source={require('./src/images/3.jpg')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
        <Quadrado>
          <Image source={require('./src/images/4.jpg')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
      </Div>
      <Externo>
        <Image source={require('./src/images/zone.png')} 
          style={{ width: 150, height: 150 }}
          resizeMode='stretch'
        />
      </Externo>
    </Body>
  );
}
