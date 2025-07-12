import React from "react";

const Container = ({ className, children }) => {
  return <div className={`${className} container`}>{children}</div>;
};

export default Container;
