import React from 'react'
import Card from 'react-bootstrap/Card';
function CustomImage({path, variant, style}) {
  return (
    <Card.Img variant={variant} src={path} style={style} />
  )
}

export default CustomImage