import React, { useState } from "react";

export const TimeField = ({
  timeIdentifier,
  upperLimit,
  secondsMulitplier,
}) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h3>{timeIdentifier}</h3>
      <input
        type="number"
        min={0}
        max={upperLimit}
        name={timeIdentifier}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
