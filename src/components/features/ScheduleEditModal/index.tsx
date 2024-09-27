import { useCallback, useEffect, useState } from 'react';
import moment, { MomentInput } from 'moment';
import { FiX } from 'react-icons/fi';
import { EventInput } from '@fullcalendar/core';
import Modal from '@/components/layout/Modal';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import DateInput from '@/components/features/DateInput';
import TimeSelect from '@/components/features/TimeSelect';
import Checkbox from '@/components/common/Checkbox';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import useCheckbox from '@/hooks/useCheckbox.ts';
import { dateFormatter, datetimeFormatter } from '@/utils/datetimeFormatter.ts';
import type * as ModalType from '@/types/modal.ts';
import type { Hour, Minute } from '@/types/time.ts';
import styles from './styles.module.css';

interface Props extends ModalType.Modal {
  date: string;
  event?: EventInput;
}

const ScheduleEditModal = ({ id, date, event }: Props) => {
  const { close } = useModal();
  const { setToast } = useToast();
  const { checked, setChecked } = useCheckbox();
  const formatter = useCallback(
    (target: MomentInput) =>
      checked ? datetimeFormatter(target) : dateFormatter(target),
    [checked],
  );
  const [schedule, setSchedule] = useState({
    title: event?.title || '',
    start: formatter(event?.start || date),
    end: formatter(event?.end || date),
  });
  const handleTitleChange = (text: string) => {
    setSchedule((prev) => ({ ...prev, title: text }));
  };
  const handleDateChange = (type: 'start' | 'end', date: string) => {
    const prev = moment(schedule[type]);
    const newDate = moment(date).hour(prev.hour()).minute(prev.minute());
    setSchedule((prev) => ({ ...prev, [type]: formatter(newDate) }));
  };
  const handleTimeChange = (
    type: 'start' | 'end',
    time: { hour: Hour; minute: Minute },
  ) => {
    const newDate = moment(schedule[type])
      .hour(parseInt(time.hour))
      .minute(parseInt(time.minute));
    setSchedule((prev) => ({ ...prev, [type]: formatter(newDate) }));
  };
  const handleClose = () => {
    close(id);
  };
  const handleSave = () => {
    if (!schedule.title.trim()) {
      setToast({ type: 'error', message: '일정 제목을 입력해주세요.' });
      return;
    }
    // TODO 일정 저장
    setToast({ type: 'success', message: '저장되었습니다.' });
    console.log(schedule.title, schedule.start, schedule.end);
    close(id);
  };

  useEffect(() => {
    setSchedule((prev) => ({
      ...prev,
      start: formatter(prev.start),
      end: formatter(prev.end),
    }));
  }, [checked]);

  return (
    <Modal id={id} className={styles['schedule--edit']}>
      <header className={styles.header}>
        <p>{event ? '일정 편집' : '일정 추가'}</p>
        <Button Icon={FiX} onClick={handleClose} />
      </header>
      <div className={styles.contents}>
        <Input
          type="text"
          placeholder="일정 제목"
          value={schedule.title}
          setValue={handleTitleChange}
        />
        <div className={styles.datetime}>
          <div className={styles.date}>
            <DateInput
              label="시작일"
              date={schedule.start}
              onDateChange={(date: string) => handleDateChange('start', date)}
            />
            <DateInput
              label="종료일"
              date={schedule.end}
              onDateChange={(date: string) => handleDateChange('end', date)}
            />
          </div>
          {checked && (
            <div className={styles.time}>
              <TimeSelect
                label="시작시간"
                onTimeChange={(time: { hour: Hour; minute: Minute }) =>
                  handleTimeChange('start', time)
                }
              />
              <TimeSelect
                label="종료시간"
                onTimeChange={(time: { hour: Hour; minute: Minute }) =>
                  handleTimeChange('end', time)
                }
              />
            </div>
          )}
          <Checkbox
            label="시간 설정"
            checked={checked}
            setChecked={setChecked}
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} active>
          Save
        </Button>
      </footer>
    </Modal>
  );
};

export default ScheduleEditModal;
