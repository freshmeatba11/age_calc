const isValidDate = ({ day, month, year }: DateType) => {
  const dateObj = new Date(year, month - 1, day);
  return (
    dateObj.getFullYear() === +year &&
    dateObj.getMonth() + 1 === +month &&
    dateObj.getDate() === +day
  );
};

type DateType = {
  day: number;
  month: number;
  year: number;
};
const BirthdayCalculator = ({ day, month, year }: DateType) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  const birthDate = new Date(year, month - 1, day);
  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth() + 1;
  const birthYear = birthDate.getFullYear();

  const result = {
    day: 0,
    month: 0,
    year: 0,
  };

  if (currentDay < birthDay) {
    result.day = currentDay - birthDay + 30;
    currentMonth = currentMonth - 1;
  } else {
    result.day = currentDay - birthDay;
  }

  if (currentMonth < birthMonth) {
    result.month = currentMonth - birthMonth + 12;
    currentYear = currentYear - 1;
  } else {
    result.month = currentMonth - birthMonth;
  }

  result.year = currentYear - birthYear;

  return result;
};

export { isValidDate, BirthdayCalculator };
