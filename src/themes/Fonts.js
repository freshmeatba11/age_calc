import styled from "styled-components";
import Metrics from "./Metrics";

const type = {
  base: '"Poppins-Regular", -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, "Open Sans", "Helvetica Neue","Noto Sans TC","微軟正黑體", sans-serif',
};

const Fonts = {
  type,
  H1: () => styled.h1`
    font-family: ${`"Poppins-BoldItalic"` + "," + type.base};
    margin: 0;
    font-size: 104px;
    font-weight: 800;
    line-height: 114.4px;
    letter-spacing: -2%;
    font-style: italic;
    @media (max-width: ${Metrics.Tablet}) {
      font-size: 56px;
      line-height: 61.6px;
    }
  `,
  P1: () => styled.p`
    font-family: ${`"Poppins-Bold"` + "," + type.base};
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 1%;
    @media (max-width: ${Metrics.Tablet}) {
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 1%;
    }
  `,
  P2: () => styled.p`
    font-family: ${`"Poppins-Bold"` + "," + type.base};
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 25%;
    @media (max-width: ${Metrics.Tablet}) {
      font-size: 12px;
      line-height: 18px;
    }
  `,
  P3: () => styled.p`
    font-family: ${`"Poppins-Italic"` + "," + type.base};
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    @media (max-width: ${Metrics.Tablet}) {
      font-size: 12px;
      line-height: 18px;
    }
  `,
};

export default Fonts;
