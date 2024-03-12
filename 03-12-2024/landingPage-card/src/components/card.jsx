function Card(props){
  const {title, description} = props.item;
  return <div style={{
    border:"2px dashed hotpink"
  }}>
    <div>{title}</div>
    <div>{description}</div>
  </div>
}

export default Card;