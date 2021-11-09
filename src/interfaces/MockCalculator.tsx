import {Operators} from '../utils/utils';

export interface RowBtns {
  text: string;
  onPress: string;
  background?: string;
  valueOfFunc?: Operators;
  widthDouble?: boolean;
}

export interface MockCalculator {
  rowBtns: RowBtns[];
}
