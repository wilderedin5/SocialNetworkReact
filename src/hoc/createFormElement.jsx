import React from 'react';
import styled from '@emotion/styled';
import { maxLength } from '../utils/validate/validateForm';
import {
  Textarea as BaseTextarea,
  Input as BaseInput,
} from '../components/common/shared/type';

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export const createFormElement = (Element) => ({ input, meta, ...props }) => (
  <div>
    <Element {...input} {...props} />
    {(meta.error && meta.touched) && <Error>{meta.error}</Error>}
  </div>
);

export const Textarea = createFormElement(BaseTextarea);
export const Input = createFormElement(BaseInput);

export const maxLength250 = maxLength(250);
export const maxLength60 = maxLength(60);
export const maxLength100 = maxLength(100);
export const maxLength1000 = maxLength(1000);
