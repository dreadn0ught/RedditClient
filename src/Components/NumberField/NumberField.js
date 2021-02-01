function NumberField(props) {
  const { number } = props;

  let numberString;

  if(number) {
    if(number >= 1000000) {
      numberString = Math.floor(number/1000000).toString() + "M";
    } else if(number >= 1000) {
      numberString = Math.floor(number/1000).toString() + "k";
    } else {
      numberString = number.toString();
    }
  }


  return (<div className="numberField">{ numberString }</div>);
}

export default NumberField;
