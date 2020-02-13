import React from "react";
import styled from "styled-components";

import { IComponentProps } from "../../../types";
import "./Button.scss";

interface IButtonProps extends IComponentProps {
  className: string;
  _background_color?: string;
}

const StyledButton = ({ className, ...props }: IButtonProps) => (
  <button className={className}>{props.children}</button>
);

const CustomStyledButton = styled(StyledButton)`
  background-color: ${props => props._background_color} !important;
`;

export const Button = (props: IButtonProps) => {
  return (
    <CustomStyledButton className={props.className} _background_color={props._background_color}>
      {props.children}
    </CustomStyledButton>
  );
};
