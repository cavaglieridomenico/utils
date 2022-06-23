export const counter = (limit) => {
  let value = 0;
  const getValue = () => value;
  const increase = () => {
    if (value === limit) {
      value = 0;
    } else {
      ++value;
    }
  };
  return {
    getValue,
    increase,
  };
};
