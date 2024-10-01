const stringToRem = (str: string) => {
  return str
    .split('')
    .reduce(
      (total, current) => total + (current.match(/[ㄱ-힣]/) ? 1 : 0.7),
      0,
    );
};

export { stringToRem };
