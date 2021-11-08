import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  background?: string;
  widthDouble?: boolean;
  onPress?: () => void;
}

export const ButtonCalc = (props: Props) => {
  const {text, background = '#2D2D2D', widthDouble = false} = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        backgroundColor: background,
        width: widthDouble ? 180 : 80,
      }}
      activeOpacity={0.7}
      >
      <Text
        style={{
          ...styles.btnText,
          color: background === '#9B9B9B' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
