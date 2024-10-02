import { useCallback, useEffect, useState } from 'react';
import moment, { MomentInput } from 'moment';
import { v4 as uuid } from 'uuid';
import { FiX } from 'react-icons/fi';
import Modal from '@/components/layout/Modal';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Checkbox from '@/components/common/Checkbox';
import DateInput from '@/components/features/DateInput';
import TimeSelect from '@/components/features/TimeSelect';
import useModal from '@/hooks/useModal.ts';
import useToast from '@/hooks/useToast.ts';
import useCheckbox from '@/hooks/useCheckbox.ts';
import useSchedule from '@/hooks/useSchedule.ts';
import { dateFormatter, datetimeFormatter } from '@/utils/datetimeFormatter.ts';
import type * as ModalType from '@/types/modal.ts';
import type { Hour, Minute } from '@/types/time.ts';
import type { Schedule } from '@/types/schedule.ts';
import styles from './styles.module.css';

interface Props extends ModalType.Modal {
  date: string;
  event?: Schedule;
}

const ScheduleEditModal = ({ id, date, event }: Props) => {
  const { handleSaveSchedule } = useSchedule();
  const { close } = useModal();
  const { setToast } = useToast();
  const { checked, setChecked } = useCheckbox(!!event?.hasTime);
  // checked 함수의 값에 따라 Date 처리
  const formatter = useCallback(
    (target: MomentInput) =>
      checked ? datetimeFormatter(target) : dateFormatter(target),
    [checked],
  );
  const [schedule, setSchedule] = useState<Schedule>({
    id: event?.id || uuid(),
    title: event?.title || '',
    start: formatter(event?.start || date),
    end: formatter(event?.end || date),
    hasTime: event?.hasTime || false,
  });
  // Schedule의 title을 수정하는 함수
  const handleTitleChange = (text: string) => {
    setSchedule((prev) => ({ ...prev, title: text }));
  };
  // Schedule의 date를 수정하는 함수
  const handleDateChange = (type: 'start' | 'end', date: string) => {
    const prev = moment(schedule[type]);
    const newDate = moment(date).hour(prev.hour()).minute(prev.minute());
    setSchedule((prev) => ({ ...prev, [type]: formatter(newDate) }));
  };
  // Schedule의 time을 수정하는 함수
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
    handleSaveSchedule({ ...schedule, hasTime: checked }, true);
    setToast({ type: 'success', message: '저장되었습니다.' });
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
              date={dateFormatter(schedule.start)}
              onDateChange={(date: string) => handleDateChange('start', date)}
            />
            <DateInput
              label="종료일"
              date={dateFormatter(schedule.end)}
              onDateChange={(date: string) => handleDateChange('end', date)}
            />
          </div>
          {checked && (
            <div className={styles.time}>
              <TimeSelect
                label="시작시간"
                defaultTime={schedule.start.split(' ')[1]}
                onTimeChange={(time: { hour: Hour; minute: Minute }) =>
                  handleTimeChange('start', time)
                }
              />
              <TimeSelect
                label="종료시간"
                defaultTime={
                  schedule.end ? schedule.end.split(' ')[1] : '00:00'
                }
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
