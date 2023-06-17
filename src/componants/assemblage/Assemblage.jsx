import React from 'react'
import "./assemblage.css"
import Container from "../container/Container"
import Carte from "../card/Carte"
import ContainerImage from "../containerImage/ContainerImage"
import ContainerText from "../containerText/ContainerText"
import Image from '../image/Image'
import Text from '../text/Text'

const Assemblage = (props) => {
  return (
    <body>
    <Container container={props.container}>
      <Carte card={props.card}>
        <ContainerImage containerImage={props.containerImage}>
          <Image src={props.src} alt={props.alt}></Image>
        </ContainerImage>
        <ContainerText containerText={props.containerText}>
          <Text type={props.typeTitle}>{props.childrenTitle}</Text>
          <Text type={props.typePara}>{props.childrenPara}</Text>
        </ContainerText>
      </Carte>
    </Container>
    </body>  
    )
}

export default Assemblage