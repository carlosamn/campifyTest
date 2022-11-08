export function fullTime(time: string): number {
  let fullHour: string | number = time?.replace(':', '.').split(' ')[0];
  const meridium = time?.split(' ')[1];
  let plusHalfDay = meridium === 'PM' && Number(fullHour) < 12 ? 12 : 0;
  plusHalfDay = plusHalfDay + Number(fullHour);
  if (plusHalfDay >= 12 && plusHalfDay < 13 && meridium !== 'PM')
    return plusHalfDay - 12;
  return plusHalfDay;
}
