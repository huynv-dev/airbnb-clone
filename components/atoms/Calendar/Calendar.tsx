'use client';

import { Range, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type CalendarProps = {
  value: Range;
  onChange: (value: any) => void;
};

const Calendar = ({ value, onChange }: CalendarProps) => {
  return (
    <DateRange
      ranges={[value]}
      onChange={onChange}
      rangeColors={['#262626']}
      direction="vertical"
      showDateDisplay={false}
    />
  );
};

export default Calendar;
