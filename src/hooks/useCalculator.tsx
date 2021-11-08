import React, {useState, useRef} from 'react';
import {Operators} from '../utils/utils';

export const useCalculator = () => {
  const [result, setResult] = useState('100');
  const [lastResult, setLastResult] = useState('0');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setResult('0');
    setLastResult('0');
  };

  const buildNumber = (numberValue: string) => {
    if (result.includes('.') && numberValue === '.') return;
    if (result.startsWith('0') || result.startsWith('-0')) {
      if (numberValue === '.') {
        setResult(result + numberValue);
      } else if (numberValue === '0' && result.includes('.')) {
        setResult(result + numberValue);
      } else if (numberValue !== '0' && !result.includes('.')) {
        setResult(numberValue);
      } else if (numberValue === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + numberValue);
      }
    } else {
      setResult(result + numberValue);
    }
  };

  const positiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const btnDel = () => {
    let negative = '';
    let numberTemp = result;
    if (result.includes('-')) {
      negative = '-';
      numberTemp = result.substr(1);
    }
    if (result.length > 1) {
      setResult(negative + numberTemp.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const changeResForLastRes = () => {
    if (result.endsWith('.')) {
      setLastResult(result.slice(0, -1));
    } else {
      setLastResult(result);
    }
    setResult('0');
  };

  const btnOperation = (operation: Operators) => {
    changeResForLastRes();
    lastOperation.current = operation;
  };

  const calculate = () => {
    const firstNumber = Number(result);
    const secondNumber = Number(lastResult);
    switch (lastOperation.current) {
      case Operators.SUM:
        setResult(`${firstNumber + secondNumber}`);
        break;
      case Operators.LESS:
        setResult(`${secondNumber - firstNumber}`);
        break;
      case Operators.MULTIPLY:
        setResult(`${firstNumber * secondNumber}`);
        break;
      case Operators.DIVIDE:
        setResult(`${secondNumber / firstNumber}`);
        break;
    }
    setLastResult('0');
  };

  return {
    result,
    lastResult,
    clean,
    buildNumber,
    positiveNegative,
    btnDel,
    btnOperation,
    calculate,
    Operators,
  };
};
