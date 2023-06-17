import Assemblage from "./componants/assemblage/Assemblage"
import chat from "./assets/chat.jpg"


function App() {

  return (
    <>
      <Assemblage
        container="container"
        card="card"
        containerImage="container-image"
        containerText="container-text"
        src={chat}
        // alt=""
        typeTitle="h2"
        childrenTitle="allo"
        typePara="p"
        childrenPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      />

    </>
  )
}

export default App
