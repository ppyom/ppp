// className을 작성할 때 공백 없이 작성하기 위해 사용
const classNames = (...classNames: (string | undefined | null | false)[]) =>
  classNames.filter((cn) => !!cn).join(' ');

export default classNames;
