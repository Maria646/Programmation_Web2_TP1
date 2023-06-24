import Assemblage from "./componants/assemblage/Assemblage"
import pokemonOne from "./assets/pokemonOne.png"
import pokemonTwo from "./assets/pokemonTwo.png"
import pokemonThree from "./assets/pokemonThree.png"
import pokemonFour from "./assets/pokemonFour.png"
import pokemonFive from "./assets/pokemonFive.png"
import pokemonSix from "./assets/pokemonSix.png"
import pokemonSeven from "./assets/pokemonSeven.png"
import pokemonHeight from "./assets/pokemonHeight.jfif"
import pokemonNine from "./assets/pokemonNine.jfif"
import pokemonTeen from "./assets/pokemonTeen.jfif"


function App() {

  return (
    <>
      <Assemblage
        container="container"
        card="card"
        containerImage="container-image"
        containerText="container-text"
        srcOne={pokemonOne}
        srcTwo={pokemonTwo}
        srcThree={pokemonThree}
        srcFour={pokemonFour}
        srcFive={pokemonFive}
        srcSix={pokemonSix}
        srcSeven={pokemonSeven}
        srcHeight={pokemonHeight}
        srcNine={pokemonNine}
        srcTeen={pokemonTeen}
        alt=""
        typeTitle="h2"
        typePara="p"
        TitleOne="Mini"
        ParaOne="Lorem ipsum dolor sit amet, consectetur"
        TitleTwo="allo"
        ParaTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleThree="allo"
        ParaThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleFour="allo"
        ParaFour="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleFive="allo"
        ParaFive="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleSix="allo"
        ParaSix="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleSeven="allo"
        ParaSeven="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleHeight="allo"
        ParaHeight="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleNine="allo"
        ParaNine="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        TitleTeen="allo"
        ParaTeen="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      />

    </>
  )
}

export default App
