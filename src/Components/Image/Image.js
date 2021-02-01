function Image(props) {

  const url = props.url || null;

  const href = props.link || null;

  const onClick = () => {
    if(href) {
      window.location = href;
    }
  }

  if(!url) {
    return (<div className="articlePicture"></div>);
  }

  return (
    <img className="articlePicture" src={ url } alt="Article" onClick={onClick} />
  );

}

export default Image;
