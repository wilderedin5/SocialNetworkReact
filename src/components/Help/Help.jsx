import React from "react";
import { Cards } from "./cards";
import { Faq } from "./faq-dropdown";

export const Help = ({ help, contacts }) => (
  <div>
    <Faq help={help} />
    <Cards contacts={contacts} />
  </div>
);
