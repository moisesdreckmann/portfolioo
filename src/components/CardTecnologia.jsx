
function CardTecnologia({text, color, className}) {

  const cardStyle = {
    backgroundColor: color,
  };
  

    return <div className={className} style={cardStyle}>{text}</div>
  }
  
  export default CardTecnologia;
  