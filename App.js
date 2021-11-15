import React from 'react';
import { Image, View, Text } from 'react-native';
import styled from 'styled-components/native';



const Quadrado = styled.View`
  width: 150px;
  height:150px;
  
`;

const Div = styled.View`
  width: 150px;
  height: 150px;
  flex-direction: row;
  justify-content: center;
`;

const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Ultima = styled.View`
width: 150px;
height:150px;
align-items: center;
`;


const P = styled.Text`
  color: green;
  font-size: 30px;
`;

export default function App() 
{
  return (
    <Body>
      <P>Galeria de imagens do Helbert Wagner Sales Lemos</P>
      <P>Tema:Trollge</P>
      <Div>
        
        <Quadrado>
          <Image source={require('./images/1.png')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
       
        <Quadrado>
          <Image source={require('./images/2.png')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
      </Div>

      <Div>
      
      <Quadrado>
          <Image source={require('./images/3.jpg')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
       
        <Quadrado>
          <Image source={require('./images/4.jpg')} 
            style={{ width: 150, height: 150 }}
            resizeMode='stretch'
        /></Quadrado>
     
      </Div>

      <Ultima>
        <Image source={require('./images/5.png')} 
          style={{ width: 300, height: 150 }}
          resizeMode='stretch'
        />
      </Ultima>
      
    </Body>
  );
}
