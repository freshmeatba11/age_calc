"use client";
import styled from "styled-components";
// import styles from "./page.module.css";

import { Fonts, Colors } from "@/themes";

import IconSvg from "public/images/icon-arrow.svg";

const SvgWrapper = styled.div`
  svg path {
    stroke: red;
  }
`;

export default function Home() {
  return (
    <main>
      <div>
        <div>
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
        </div>

        <div>
          <hr />
          <SvgWrapper>
            <IconSvg />
          </SvgWrapper>
        </div>

        <div>
          <h1>-- years</h1>
          <h1>-- months</h1>
          <h1>-- days</h1>
        </div>
      </div>
    </main>
  );
}
