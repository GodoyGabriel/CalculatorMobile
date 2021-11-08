import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    result,
    lastResult,
    clean,
    buildNumber,
    positiveNegative,
    btnDel,
    btnOperation,
    calculate,
    Operators,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {lastResult !== '0' && (
        <Text style={styles.resultSmall}>{lastResult}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" onPress={clean} background="#9B9B9B" />
        <ButtonCalc
          text="+/-"
          background="#9B9B9B"
          onPress={positiveNegative}
        />
        <ButtonCalc text="del" background="#9B9B9B" onPress={btnDel} />
        <ButtonCalc
          text="/"
          background="#FF9427"
          onPress={() => btnOperation(Operators.DIVIDE)}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" onPress={buildNumber} />
        <ButtonCalc text="8" onPress={buildNumber} />
        <ButtonCalc text="9" onPress={buildNumber} />
        <ButtonCalc
          text="x"
          background="#FF9427"
          onPress={() => btnOperation(Operators.MULTIPLY)}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" onPress={buildNumber} />
        <ButtonCalc text="5" onPress={buildNumber} />
        <ButtonCalc text="6" onPress={buildNumber} />
        <ButtonCalc
          text="-"
          background="#FF9427"
          onPress={() => btnOperation(Operators.LESS)}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" onPress={buildNumber} />
        <ButtonCalc text="2" onPress={buildNumber} />
        <ButtonCalc text="3" onPress={buildNumber} />
        <ButtonCalc
          text="+"
          background="#FF9427"
          onPress={() => btnOperation(Operators.SUM)}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" onPress={buildNumber} widthDouble />
        <ButtonCalc text="." onPress={buildNumber} />
        <ButtonCalc text="=" background="#FF9427" onPress={calculate} />
      </View>
    </View>
  );
};
