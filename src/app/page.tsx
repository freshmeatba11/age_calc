"use client";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// import styles from "./page.module.css";

import { Fonts, Colors, Metrics } from "@/themes";
import { isValidDate } from "@/utils/date";

import Input from "./Input";
import IconSvg from "public/images/icon-arrow.svg";
import { useEffect } from "react";

const Main = styled.div`
  background-color: ${Colors.OffWhite};
  width: 100%;
  height: 100%;
  height: 100svh;
  padding: ${Metrics.px4};
  display: flex;
  place-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: ${Colors.White};
  width: 100%;
  min-width: 343px;
  max-width: 840px;
  height: 486px;
  border-radius: ${Metrics.Radius_6};
  padding: 48px ${Metrics.px5};
  display: flex;
  flex-direction: column;
  gap: ${Metrics.px6};
`;

const InputWrapper = styled.div`
  border: 1px red dashed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Metrics.px4};
  input {
    width: 100%;
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
`;

const Divider = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "divider";
  align-items: center;
  justify-items: center;
  div,
  hr {
    grid-area: divider;
  }
  hr {
    width: 100%;
    height: 1px;
  }
`;

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data: any) => console.log(data);

  const now = new Date();

  const inputDay = watch("input.day");
  const inputMonth = watch("input.month");
  const inputYear = watch("input.year");

  useEffect(() => {
    if (inputDay && inputMonth && inputYear) {
      const date = {
        day: inputDay,
        month: inputMonth,
        year: inputYear,
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
        }, 100);
      } else {
        clearErrors();
      }
    }
  }, [inputDay, inputMonth, inputYear]);

  const inputList = [
    {
      name: "day",
      label: "day",
      placeHolder: "DD",
      rule: {
        required: "Must be a valid day",
        maxLength: {
          value: 2,
          message: "Must be a valid day",
        },
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
        maxLength: 2,
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
        maxLength: 4,
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
                }}
              />
            );
          })}
        </InputWrapper>
        {inputDay && inputMonth && inputYear && (
          <div>
            {inputDay}-{inputMonth}-{inputYear}
          </div>
        )}

        <Divider>
          <hr />
          <SvgWrapper>
            <IconSvg />
          </SvgWrapper>
        </Divider>
        <div>
          <h1>-- years</h1>
          <h1>-- months</h1>
          <h1>-- days</h1>
        </div>
      </Wrapper>
    </Main>
  );
}
