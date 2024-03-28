import React from "react";

import Select from "react-select";

export const Selector = ({
  options,
  defaultValue,
  onChange,
  isMulti = false,
}) => {
  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: "12px",
          borderColor: "var(--colorTextExtraLight)",
          boxShadow: "var(--shadowColor2)",
          backgroundColor: "var(--rgbBackgroundExtraLight)",
          transition: "var(--backgroundChangeTransitionXS)",
          color: "var(--rgbText)",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          backgroundColor: "var(--colorTextExtraLight)",
        }),
        menuPortal: (base) => ({
          ...base,
          fontSize: "12px",
        }),
      }}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      isMulti={isMulti}
    />
  );
};
