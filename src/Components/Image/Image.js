function Image(props) {

  const url = props.url || null;


  if(!url) {
    return (<div className="articlePicture"></div>);
  }

  return (<img className="articlePicture" src={ url } alt="Article" />);

}

export default Image;
