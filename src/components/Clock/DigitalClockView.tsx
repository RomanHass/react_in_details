import { ClockViewPropsType } from "./Clock";

const getDigitString = (num: number) => {
  return num < 10 ? "0" + num : num;
};

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
  return (
    <>
      {" "}
      <span>{getDigitString(date.getHours())}</span>:
      <span>{getDigitString(date.getMinutes())}</span>:
      <span>{getDigitString(date.getSeconds())}</span>
    </>
  );
};