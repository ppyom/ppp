const classNames = (...classNames: (string | undefined | null | false)[]) =>
  classNames.filter((cn) => !!cn).join(' ');

export default classNames;
