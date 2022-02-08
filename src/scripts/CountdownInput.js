import { TimeField } from "./TimeField";

export const CountdownInput = ({ setTime }) => {
  return (
    <div>
      <TimeField
        upperLimit={23}
        secondsMulitplier={3600}
        timeIdentifier={"hours"}
      />
      <TimeField
        upperLimit={59}
        secondsMulitplier={60}
        timeIdentifier={"minutes"}
      />
      <TimeField
        upperLimit={59}
        secondsMulitplier={1}
        timeIdentifier={"seconds"}
      />
    </div>
  );
};
