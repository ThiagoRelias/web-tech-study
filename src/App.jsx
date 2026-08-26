import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner/Banner";
import Count from "./Components/Count";

function App() {
  return (
    <>
      <Header title="Meu site" />

      <Count />
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
