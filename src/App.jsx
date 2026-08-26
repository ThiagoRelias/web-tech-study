import Banner from "./Components/Banner/Banner"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Card from "./Components/Card"



function App() {
  return (
    <>
      <Header title="Meu site" />

      <Header title="Lorem ipsum" />

      <Header title="Introdução ao React" />

      {/* <ImgCard caption="Lorem ipsum dolor sit amet," /> */}



      <Banner>
        <h1>Bem-Vindo ao meu site</h1>
        <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
      </Banner>
      {/* <Card /> */}
      <Footer title="new Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

    </>
  )
}

export default App
