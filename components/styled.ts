import styled from "styled-components";
import { colors } from "../theme";

type TGridWrapperProps = {
  height: number;
};

export const GridWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  * {
    box-sizing: inherit;
  }
  max-height: calc(100vh - 120px);
`;

export const GridInner = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  border: 1px solid ${colors.DEFAULT_BORDER};
  height: ${(props: TGridWrapperProps): number =>
    props.height ? props.height : 32}px;
  min-height: ${(props: TGridWrapperProps): number =>
    props.height ? props.height : 32}px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 20px;
`;
