import {getTomorrow} from "./tomorrow";

export const parseFinishTimeValue = () => {
  let day = '' + getTomorrow().getDate();
  let month = '' + (getTomorrow().getMonth() + 1);
  const year = getTomorrow().getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}