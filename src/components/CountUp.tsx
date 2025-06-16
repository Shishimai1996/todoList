import React from "react";

interface ICountUp {
  count: number;
}

export const CountUp: React.FC<ICountUp> = ({ count }) => {
  return <p>やること{count}</p>;
};
