import React from 'react';
import {TextInput, StyleSheet, TextInputProps, ViewStyle} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyle;
  placeholderTextColor?: string;
}
const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  style,
  placeholderTextColor,
}: CustomTextInputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CustomTextInput;
