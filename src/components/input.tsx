import React from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  placeholderTextColor: string;
};

export const InputText: React.FC<InputProps> = (props) => {
  const { value, onChange, placeholder, placeholderTextColor } = props;
  return (
    <StyledInputText
      value={value}
      onChangeText={(value: string) => onChange(value)}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

const StyledInputText = styled(TextInput)`
  margin-top: 20px;
  padding: 5px 10px;
  width: 300px;
  height: 35px;
  color: #fff;
  border: 1px solid #999;
  border-radius: 5px;
`;
