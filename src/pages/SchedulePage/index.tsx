import PageLayout from '@/components/layout/PageLayout';
import Calendar from '@/components/features/Calendar';

const SchedulePage = () => {
  return (
    <PageLayout title="일정 관리" hideTitle>
      <Calendar />
    </PageLayout>
  );
};

export default SchedulePage;
