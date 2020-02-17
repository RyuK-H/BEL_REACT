import React from "react";
import styled, { css } from "styled-components";

import { IComponentProps } from './types';
import { Button, View } from "react-native";

interface IButtonProps extends IComponentProps {
	className?: string;
	gray?: boolean;
	red?: boolean;
}

// const CustomStyledButton = ({ className, ...props }: IButtonProps) => (
//   <View style={className}>
//     <Button
//       title="RN Styled-Components"
//       onPress={() => {}}
//     >
//       {props.children}
//     </Button>
//   </View>
// );

const StyledButton = styled.View`
  display: flex;
  border: 0;
  background-color: #6AD1BA;
  color: #FFFFFF;
  padding: 0px 20px;
  min-width: 140px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  margin: 20px;

  &:disabled {
    cursor: not-allowed;
    background-color: #E4E7F0 !important;
  }

  &:hover {
    background-color: #1ba3a3;
  }

  &:active {
    background-color: #39797a;
  }

  ${props =>
    props.gray === true &&
      css`
      background-color: #4E527D;

      &:hover {
        background-color: #464A68;
      }

      &:active {
        background-color: #313557;
      }
  `};

  ${props =>
    props.red === true &&
      css`
      background-color: #fa265f;

      &:hover {
        background-color: #c81e4c;
      }

      &:active {
        background-color: #961739;
      }
  `};
`;

export const SCButton = (props: IButtonProps) => {
  return (
    <StyledButton gray={props.gray} red={props.red}>
      <Button title="RN Styled-Components" onPress={() => {}} />
    </StyledButton>
  );
};
