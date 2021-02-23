import { Form, TreeSelect } from "formik-antd";
import styled from "styled-components";

export const StyledCategoriesTreeSelect = styled(TreeSelect)`
  flex: 1;
`;

export const StyledRegionTreeSelect = styled(TreeSelect)`
  flex: 0 1 16rem;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  max-width: 1000px;

  && > * {
    margin-left: 0.5rem;
  }

  & > *:first-child {
    margin-left: 0;
  }
`;
