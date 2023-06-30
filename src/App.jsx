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
        TitleOne="Bimboy"
        ParaOne="Bimboy possède également des compétences uniques."
        TitleTwo="Cadject"
        ParaTwo="Cadject est connu pour sa capacité unique à manipuler l'électricité et les illusions. Il peut créer des illusions holographiques pour dérouter ses adversaires et les attirer dans un faux sentiment de sécurité. "
        TitleThree="Zebre"
        ParaThree="Ce Pokémon est connu pour sa nature protectrice et altruiste envers les membres de son troupeau. Il est réputé pour intervenir lors des confrontations pour défendre les plus faibles et rétablir la paix."
        TitleFour="Hypocampe"
        ParaFour="Ce Pokémon est capable de maîtriser les flux d'eau avec une grande précision. Il peut nager à travers les courants les plus puissants et se faufiler dans les recoins les plus étroits des océans."
        TitleFive="Ours"
        ParaFive="Ce Pokémon est également doté d'une force phénoménale."
        TitleSix="Aigle"
        ParaSix="Ce Pokémon est célèbre pour sa vision perçante."
        ParaSeven="Ce Pokémon possède également des capacités spéciales. Il peut utiliser des attaques de type Insecte comme Bombardement Brillant qui libère un essaim d'éclats lumineux sur ses adversaires. "
        TitleHeight="Phoque"
        ParaHeight="Phoque possède également une queue large et puissante, qui lui permet de se propulser à grande vitesse dans l'eau."
        TitleNine="Fleur"
        ParaNine="Ce Pokémon est réputé pour sa douceur et sa compassion. Il est souvent considéré comme un symbole de paix et d'harmonie, apportant une atmosphère apaisante partout où il va."
        TitleTeen="Fleur"
        ParaTeen="Ce Pokémon est réputé pour sa douceur et sa compassion. Il est souvent considéré comme un symbole de paix et d'harmonie, apportant une atmosphère apaisante partout où il va."
      />

    </>
  )
}

export default App
