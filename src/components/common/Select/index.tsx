import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Option<T> {
  value: T;
  label: T;
}

interface Props<T>
  extends Omit<ReactSelectProps<Option<T>, false>, 'options' | 'onChange'> {
  options: T[];
  onChange: (option: T) => void;
}

const Select = <T,>({ options, onChange, ...props }: Props<T>) => {
  return (
    <ReactSelect<Option<T>, false>
      classNames={{
        container: (state) =>
          classNames(styles.select, state.isFocused && styles.focused),
        control: (state) =>
          classNames(styles.control, state.isFocused && styles.focused),
        option: (state) =>
          classNames(
            styles.option,
            state.isFocused && styles.focused,
            state.isSelected && styles.selected,
          ),
      }}
      options={options.map((v) => ({
        label: v,
        value: v,
      }))}
      onChange={(changeValue: Option<T> | null) => {
        onChange(changeValue?.value || options[0]);
      }}
      isSearchable={false}
      {...props}
    />
  );
};

export default Select;
