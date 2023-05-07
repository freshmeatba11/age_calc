"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// import styles from "./page.module.css";

import { Fonts, Colors, Metrics } from "@/themes";
import { isValidDate, BirthdayCalculator } from "@/utils/date";

import Input from "./Input";
import IconSvg from "public/images/icon-arrow.svg";

const Main = styled.main`
  background-color: ${Colors.OffWhite};
  width: 100%;
  height: 100%;
  height: 100svh;
  padding: ${Metrics.px4};
  display: flex;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  & ::selection {
    background: ${Colors.LightGrey};
  }
`;

const Wrapper = styled.div`
  background-color: ${Colors.White};
  width: 100%;
  min-width: 375px;
  max-width: 840px;
  height: 486px;
  border-radius: ${Metrics.Radius_6};
  padding: 48px ${Metrics.px5};
  margin: auto;

  @media (width > ${Metrics.Tablet}) {
    height: min-content;
    padding: 56px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: ${Metrics.px4};
  input {
    width: 100%;
  }
  @media (width > ${Metrics.Tablet}) {
    gap: ${Metrics.px6};
  }
`;

const SvgWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${Metrics.Radius_5};
  background-color: ${Colors.Purple};
  display: flex;
  place-items: center;
  place-content: center;
  svg {
    width: 24px;
    height: 24px;

    path {
      stroke: ${Colors.White};
    }
  }
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      background-color: ${Colors.OffBlack};
    }
  }
  @media (width > ${Metrics.Tablet}) {
    width: 96px;
    height: 96px;
    svg {
      width: 44px;
      height: 44px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  padding-bottom: ${Metrics.px6};
  display: grid;
  grid-template-areas: "divider";
  align-items: center;
  justify-items: center;
  div,
  hr {
    grid-area: divider;
  }
  hr {
    border-color: ${Colors.LightGrey02} transparent transparent;
    width: 100%;
    height: 1px;
  }
  @media (width > ${Metrics.Tablet}) {
    justify-items: end;
  }
`;

const ResultText = styled(Fonts.H1())`
  span {
    color: ${Colors.Purple};
    margin-right: ${Metrics.px2};
    @media (width > ${Metrics.Tablet}) {
      letter-spacing: 0.6rem;
    }
  }
`;

export default function Home() {
  const [calc, setCalc] = useState({
    isLoading: true,
    result: { days: 0, months: 0, years: 0 },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      input: { day: "", month: "", year: "" },
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    const date = {
      day: +data.input.day,
      month: +data.input.month,
      year: +data.input.year,
    };
    console.log(BirthdayCalculator(date));
    setCalc({ isLoading: false, result: BirthdayCalculator(date) });
  };

  const now = new Date();
  type KeyofResultType = "days" | "months" | "years";

  const inputDay = watch("input.day");
  const inputMonth = watch("input.month");
  const inputYear = watch("input.year");

  useEffect(() => {
    if (inputDay && inputMonth && inputYear) {
      const date = {
        day: +inputDay,
        month: +inputMonth,
        year: +inputYear,
      };
      if (!isValidDate(date)) {
        setTimeout(() => {
          setError("input.day", {
            type: "custom",
            message: "Invalid Date",
          });
          setError("input.month", {
            type: "custom",
            message: "",
          });
          setError("input.year", {
            type: "custom",
            message: "",
          });
        }, 10);
      } else {
        clearErrors();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputDay, inputMonth, inputYear]);

  const inputList = [
    {
      name: "day",
      label: "day",
      placeHolder: "DD",
      rule: {
        required: "Must be a valid day",
        pattern: {
          value: /^[0-9]*$/,
          message: "Number only",
        },
        validate: {
          value: (value: number) =>
            (value > 0 && value < 32) || "Must be a valid day",
        },
      },
    },
    {
      name: "month",
      label: "month",
      placeHolder: "MM",
      rule: {
        required: true,
        pattern: {
          value: /^[0-9]*$/,
          message: "Number only",
        },
        validate: {
          value: (value: number) =>
            (value > 0 && value < 13) || "Must be a valid month",
        },
      },
    },
    {
      name: "year",
      label: "year",
      placeHolder: "YYYY",
      rule: {
        required: true,
        pattern: {
          value: /^[0-9]*$/,
          message: "Number only",
        },
        validate: {
          value: (value: number) =>
            value <= now.getFullYear() || "Must be in the past",
        },
      },
    },
  ];

  return (
    <Main>
      <Wrapper>
        <InputWrapper>
          {inputList.map(({ name, ...config }, index) => {
            return (
              <Input
                key={index}
                {...{
                  register,
                  // @ts-ignore
                  isError: errors.input?.[name] ? true : false,
                  ...config,
                  name: `input.${name}`,
                  errorMessage:
                    // @ts-ignore
                    errors.input?.[name]?.message,
                  onChange: () => {
                    setCalc({
                      isLoading: true,
                      result: {
                        days: 0,
                        months: 0,
                        years: 0,
                      },
                    });
                  },
                  autoComplete: "off",
                  type: "text",
                  pattern: "[0-9]*",
                  inputmode: "numeric",
                }}
              />
            );
          })}
        </InputWrapper>

        <Divider>
          <hr />
          <SvgWrapper onClick={handleSubmit(onSubmit)}>
            <IconSvg />
          </SvgWrapper>
        </Divider>

        <div>
          {calc.isLoading && (
            <>
              <ResultText>
                <span>--</span>years
              </ResultText>
              <ResultText>
                <span>--</span>months
              </ResultText>
              <ResultText>
                <span>--</span>days
              </ResultText>
            </>
          )}
          {isDirty &&
            !calc.isLoading &&
            Object.keys(calc.result)
              .reverse()
              .map((key) => {
                return (
                  <ResultText key={key}>
                    <span>{calc.result[key as KeyofResultType]}</span>
                    {key}
                  </ResultText>
                );
              })}
        </div>
      </Wrapper>
    </Main>
  );
}
