
function DateField(props) {

  const utc = props.date * 1000
  const date = new Date(utc);
  let dateString = "";

  const today = new Date();
  const daysAgo = (date, days) => new Date(date.setDate(date.getDate() - days));

  const isDate = (someDate, today) => {
    return someDate.getDay() === today.getDay() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
  };

  if(isDate(date, today)) {
    dateString = "Today";
  } else if(isDate(date, daysAgo(today, 1))) {
    dateString = "Yesterday";
 } else {
    dateString = date.toDateString();
  }

  return (<div className="dateContainer">{ dateString } </div>);
}

export default DateField;
