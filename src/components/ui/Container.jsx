import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-[86rem] px-4 sm:px-10 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
