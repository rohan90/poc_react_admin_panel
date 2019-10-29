import styled from "styled-components";

export const PageContainer = styled.div`
  width: ${props => {
    if (props.hasOwnProperty("isExpanded")) {
      return props.isExpanded ? "calc(100% - 230px)" : "calc(100% - 60px);";
    } else {
      return "100%";
    }
  }};
  float: right;
  padding: ${props => (props.align ? "0" : "15px 30px")};
  transition: width 0.2s;
  margin-top: 100px;
`;
