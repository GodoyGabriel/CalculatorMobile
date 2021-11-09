import {Operators} from './utils';
import { MockCalculator } from '../interfaces/MockCalculator';

const mockCalculator: MockCalculator[] = [
  {
    rowBtns: [
      {
        text: 'C',
        onPress: 'clean',
        background: '#9B9B9B',
      },
      {
        text: '+/-',
        onPress: 'positiveNegative',
        background: '#9B9B9B',
      },
      {
        text: 'del',
        onPress: 'btnDel',
        background: '#9B9B9B',
      },
      {
        text: '/',
        onPress: 'btnOperation',
        background: '#FF9427',
        valueOfFunc: Operators.DIVIDE,
      },
    ],
  },
  {
    rowBtns: [
      {
        text: '7',
        onPress: 'buildNumber',
      },
      {
        text: '8',
        onPress: 'buildNumber',
      },
      {
        text: '9',
        onPress: 'buildNumber',
      },
      {
        text: 'x',
        onPress: 'btnOperation',
        background: '#FF9427',
        valueOfFunc: Operators.MULTIPLY,
      },
    ],
  },
  {
    rowBtns: [
      {
        text: '4',
        onPress: 'buildNumber',
      },
      {
        text: '5',
        onPress: 'buildNumber',
      },
      {
        text: '6',
        onPress: 'buildNumber',
      },
      {
        text: '-',
        onPress: 'btnOperation',
        background: '#FF9427',
        valueOfFunc: Operators.LESS,
      },
    ],
  },
  {
    rowBtns: [
      {
        text: '1',
        onPress: 'buildNumber',
      },
      {
        text: '2',
        onPress: 'buildNumber',
      },
      {
        text: '3',
        onPress: 'buildNumber',
      },
      {
        text: '+',
        onPress: 'btnOperation',
        background: '#FF9427',
        valueOfFunc: Operators.SUM,
      },
    ],
  },
  {
    rowBtns: [
      {
        text: '0',
        onPress: 'buildNumber',
        widthDouble: true,
      },
      {
        text: '.',
        onPress: 'buildNumber',
      },
      {
        text: '=',
        onPress: 'calculate',
        background: '#FF9427',
      },
    ],
  },
];

export {mockCalculator};
