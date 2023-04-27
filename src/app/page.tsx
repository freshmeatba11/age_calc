"use client";
import styled from "styled-components";
// import styles from "./page.module.css";

import { Fonts, Colors, Metrics } from "@/themes";

import IconSvg from "public/images/icon-arrow.svg";

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
  return (
    <Main>
      <Wrapper>
        <InputWrapper>
          <div>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
        </InputWrapper>

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
