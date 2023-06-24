import React from 'react'
import "./assemblage.css"
import Container from "../container/Container"
import Carte from "../card/Carte"
import ContainerImage from "../containerImage/ContainerImage"
import ContainerText from "../containerText/ContainerText"
import Image from '../image/Image'
import Text from '../text/Text'
import { useState } from 'react'

const Assemblage = (props) => {
  return (
    <Container container={props.container}>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcOne}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleOne}
      childrenPara={props.ParaOne}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcTwo}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleTwo}
      childrenPara={props.ParaTwo}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcThree}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleThree}
      childrenPara={props.ParaThree}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcFour}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleFour}
      childrenPara={props.ParaFour}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcFive}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleFive}
      childrenPara={props.ParaFive}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcSix}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleSix}
      childrenPara={props.ParaSix}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcSeven}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleSeven}
      childrenPara={props.ParaSeven}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcHeight}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleHeight}
      childrenPara={props.ParaHeight}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcNine}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleNine}
      childrenPara={props.ParaNine}
      >
      </Carte>
      <Carte 
      card={props.card}
      containerImage={props.containerImage}
      src={props.srcTeen}
      alt={props.alt}
      containerText={props.containerText}
      typeTitle={props.typeTitle}
      typePara={props.typePara}
      childrenTitle={props.TitleTeen}
      childrenPara={props.ParaTeen}
      >
      </Carte>
    </Container> 
    )
}

export default Assemblage
