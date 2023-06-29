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
        ParaOne="Bimboy possède également des compétences uniques. Il peut utiliser des attaques de style, comme Danse Envoûtante qui hypnotise ses adversaires par ses mouvements gracieux, ou Charme Éclatant qui augmente sa propre défense en captivant l'attention de ses ennemis."
        TitleTwo="Cadject"
        ParaTwo="Cadject est connu pour sa capacité unique à manipuler l'électricité et les illusions. Il peut créer des illusions holographiques pour dérouter ses adversaires et les attirer dans un faux sentiment de sécurité. Il utilise également des attaques électriques puissantes, comme Éclair Synchronisé qui déchaîne une tempête électrique contrôlée, ou Distorsion Fantôme qui perturbe la réalité et désoriente ses adversaires"
        TitleThree="Zebre"
        ParaThree="Ce Pokémon est connu pour sa nature protectrice et altruiste envers les membres de son troupeau. Il est réputé pour intervenir lors des confrontations pour défendre les plus faibles et rétablir la paix. Les dresseurs qui parviennent à gagner la confiance de Zèbre sont honorés de sa loyauté et bénéficient de sa sagesse dans leurs aventures."
        TitleFour="Hypocampe"
        ParaFour="Ce Pokémon est capable de maîtriser les flux d'eau avec une grande précision. Il peut nager à travers les courants les plus puissants et se faufiler dans les recoins les plus étroits des océans. Hypocampe utilise son pouvoir aquatique pour créer des attaques spéciales, telles que Vague Étourdissante qui envoie une vague d'énergie aquatique étourdissante sur ses adversaires, ou Danse des Profondeurs qui lui permet de disparaître et de réapparaître à volonté dans l'eau."
        TitleFive="Ours"
        ParaFive="Ce Pokémon est également doté d'une force phénoménale. Il peut utiliser des attaques puissantes telles que Poing Écrasant qui délivre un coup de poing terrifiant, ou Rugissement Féroce qui fait trembler la terre et augmente sa propre puissance."
        TitleSix="Aigle"
        ParaSix="Ce Pokémon est célèbre pour sa vision perçante. Aigle peut repérer sa proie depuis de grandes distances, même lorsqu'elle est camouflée ou en mouvement rapide. Sa précision visuelle lui permet également de repérer les moindres détails dans son environnement, ce qui en fait un excellent observateur et un compagnon idéal pour les explorations."
        TitleSeven="Coqcinelle"
        ParaSeven="Ce Pokémon possède également des capacités spéciales. Il peut utiliser des attaques de type Insecte comme Bombardement Brillant qui libère un essaim d'éclats lumineux sur ses adversaires, ou Protection Chanceuse qui crée un bouclier protecteur autour de lui, augmentant sa défense."
        TitleHeight="Phoque"
        ParaHeight="Phoque possède également une queue large et puissante, qui lui permet de se propulser à grande vitesse dans l'eau. Il peut utiliser cette queue pour créer des vagues d'eau ou de glace lors de ses attaques spéciales, telles que Vague Polaire qui projette un flot d'eau glaciale sur ses adversaires, ou Blizzard Étourdissant qui génère une tempête de neige et de glace tourbillonnante."
        TitleNine="Fleur"
        ParaNine="Ce Pokémon est réputé pour sa douceur et sa compassion. Il est souvent considéré comme un symbole de paix et d'harmonie, apportant une atmosphère apaisante partout où il va. Les dresseurs qui parviennent à se lier d'amitié avec Fleur bénéficient de sa capacité à guider et à encourager la croissance et l'épanouissement."
        TitleTeen="Fleur"
        ParaTeen="Ce Pokémon est réputé pour sa douceur et sa compassion. Il est souvent considéré comme un symbole de paix et d'harmonie, apportant une atmosphère apaisante partout où il va. Les dresseurs qui parviennent à se lier d'amitié avec Fleur bénéficient de sa capacité à guider et à encourager la croissance et l'épanouissement"
      />

    </>
  )
}

export default App
