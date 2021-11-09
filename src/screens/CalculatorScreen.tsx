import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';
import {mockCalculator} from '../utils/mockCalculator';
import {RowBtns, MockCalculator} from '../interfaces/MockCalculator';

export const CalculatorScreen = () => {
  const {result, lastResult, getOnPress} = useCalculator();

  const getRows = () => {
    return mockCalculator.map((row: MockCalculator) => {
      return (
        <View style={styles.row}>
          {row.rowBtns.map((btn: RowBtns, i) => {
            return (
              <ButtonCalc
                key={i}
                text={btn.text}
                background={btn.background}
                onPress={value => getOnPress(value, btn)}
                widthDouble={btn.widthDouble}
              />
            );
          })}
        </View>
      );
    });
  };

  return (
    <View style={styles.calculatorContainer}>
      {lastResult !== '0' && (
        <Text style={styles.resultSmall}>{lastResult}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      {getRows()}
    </View>
  );
};
