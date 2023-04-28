import React from "react";
import styled from "styled-components";
import { UseFormRegister, FieldValues } from "react-hook-form";

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
    .error {
      color: ${Colors.LightRed};
    }
  }
`;

const LabelText = styled(Fonts.P2())`
  color: ${Colors.SmokeyGrey};
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  user-select: none;
  .error {
    color: ${Colors.LightRed};
  }
`;

const ErrorText = styled(Fonts.P3())`
  color: ${Colors.LightRed};
  user-select: none;
`;

type Props = {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  rule: any;
  errorMessage: string;
};

const Input = ({ register, name, label, rule, errorMessage }: Props) => {
  return (
    <Wrapper>
      <label htmlFor={name}>
        <LabelText>{label}</LabelText>
      </label>
      <InputWrapper>
        <input {...register(name, { ...rule })} />
      </InputWrapper>
      <ErrorText>{errorMessage}</ErrorText>
    </Wrapper>
  );
};

export default Input;
