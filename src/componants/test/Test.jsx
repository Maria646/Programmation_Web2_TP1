import React from 'react'
import ContainerImage from '../containerImage/ContainerImage';
import ContainerText from '../containerText/ContainerText';
import Image from '../image/Image';
import Text from '../text/Text';
import { useState } from 'react'

const Test = (props) => {
 const [affichageText, setAffichageText] = useState(false);
  
  const onEnter = () => {
    setAffichageText(true);
  };

  const onLeave = () => {
    setAffichageText(false);
  };

  const containerTextStyle = {
    display: affichageText ? 'block' : 'none',
  };
  console.log(containerTextStyle)

  return (
  <div>
  <div className= {props.containerImage} onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <Image src={props.src} alt={props.alt}></Image>
  </div>
  <div className= {props.containerText} style={containerTextStyle}>
    <Text type={props.typeTitle}>{props.childrenTitle}</Text>
    <Text type={props.typePara}>{props.childrenPara}</Text>
  </div>
    {/* <ContainerImage  containerImage= {props.containerImage} onMouseEnter ={onEnter} onMouseLeave={onLeave}>
     <Image src={props.src} alt={props.alt}></Image>
    </ContainerImage>
    <ContainerText containerText= {props.containerText} style={containerTextStyle}>
      <Text type={props.typeTitle}>{props.childrenTitle}</Text>
      <Text type={props.typePara}>{props.childrenPara}</Text>
    </ContainerText> */}
  </div>
  )
}

export default Test