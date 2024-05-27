export default function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
    return dayOfWeek;
  } else {
    return 'Not a weekend';
  }
};