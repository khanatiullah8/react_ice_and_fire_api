import React from "react";
import StyledWrapper from "./StyledWrapper";

const Wrapper = ({ className, children }) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

export default Wrapper;
