import React from "react"
import ContainerImage from '../containerImage/ContainerImage';
import ContainerText from '../containerText/ContainerText';
import Image from '../image/Image';
import Text from '../text/Text';
import { useState } from 'react'

const Carte = (props) => {
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
  
  const containerCardStyle = {
    height : affichageText ? '300px' : '150px'
  }

  return (
  <div className={props.card} style={containerCardStyle}>
    <div className= {props.containerImage} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Image src={props.src} alt={props.alt}></Image>
    </div>
    <div className= {props.containerText} style={containerTextStyle}>
      <Text type={props.typeTitle}>{props.childrenTitle}</Text>
      <Text type={props.typePara}>{props.childrenPara}</Text>
    </div>

       {/* Jai essayer cette solution ci-dessous en mettant la fonctionnalité du useState dans les componants importer...
       mais cela ne fonctionne pas ! */}
      
    {/* <ContainerImage  containerImage= {props.containerImage} mouseEntrer ={onEnter} mouseLeave={onLeave}>
      <Image src={props.src} alt={props.alt}></Image>
     </ContainerImage>
    <ContainerText containerText= {props.containerText} style={containerTextStyle}>
      <Text type={props.typeTitle}>{props.childrenTitle}</Text>
      <Text type={props.typePara}>{props.childrenPara}</Text>
    </ContainerText>  */}
    </div>
  )
}

export default Carte