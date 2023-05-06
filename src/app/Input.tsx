import React from "react";
import styled from "styled-components";

import { Fonts, Colors, Metrics } from "@/themes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Metrics.px1};
  @media (width > ${Metrics.Mobile}) {
    gap: ${Metrics.px2};
  }
`;

const InputWrapper = styled.div`
  input {
    padding: ${Metrics.px3} ${Metrics.px4};
    background-color: ${Colors.White};
    border: 1px solid ${Colors.LightGrey};
    border-radius: ${Metrics.Radius_2};
    caret-color: ${Colors.Purple};
    cursor: pointer;
    &::placeholder {
      opacity: 0.8;
    }
    &:is(:hover, :focus, :focus-visible) {
      border-color: ${Colors.Purple};
      outline: none;
    }

    color: ${Colors.OffBlack};
    font-family: ${`"Poppins-Bold"` + "," + Fonts.type.base};
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.05rem;
    @media (max-width: ${Metrics.Tablet}) {
      font-size: 20px;
      line-height: 30px;
    }
    &.error {
      border-color: ${Colors.LightRed};
    }
  }
`;

const LabelText = styled(Fonts.P2())`
  color: ${Colors.SmokeyGrey};
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  user-select: none;
  &.error {
    color: ${Colors.LightRed};
  }
`;

const ErrorText = styled(Fonts.P3())`
  color: ${Colors.LightRed};
  user-select: none;
  height: 36px;
`;

type Props = {
  register: any;
  name: string;
  label: string;
  placeHolder: string;
  rule: any;
  isError: boolean;
  errorMessage: string;
  onChange?: any;
  autoComplete?: string;
};

const Input = ({
  register,
  name,
  label,
  placeHolder,
  rule,
  isError,
  errorMessage,
  onChange,
  autoComplete,
}: Props) => {
  return (
    <Wrapper>
      <label htmlFor={label}>
        <LabelText className={isError ? "error" : ""}>{label}</LabelText>
      </label>
      <InputWrapper>
        <input
          className={isError ? "error" : ""}
          placeholder={placeHolder}
          {...register(name, { ...rule, onChange })}
          autoComplete={autoComplete}
        />
      </InputWrapper>
      <ErrorText>{isError && errorMessage ? errorMessage : null}</ErrorText>
    </Wrapper>
  );
};

export default Input;
