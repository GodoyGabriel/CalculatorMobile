import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <ButtonCalc text="C" background="#9B9B9B"/>
        <ButtonCalc text="+/-" background="#9B9B9B"/>
        <ButtonCalc text="%" background="#9B9B9B"/>
        <ButtonCalc text="/" background="#FF9427"/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="x" background="#FF9427"/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" background="#FF9427"/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" background="#FF9427"/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" widthDouble/>
        <ButtonCalc text="." />
        <ButtonCalc text="=" background="#FF9427"/>
      </View>
    </View>
  );
};
