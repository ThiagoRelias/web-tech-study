import Header from './Components/Header/index.jsx'
import Card from './Components/card.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Footer from './Components/footer.jsx'
import ImgCard from './Components/ImgCard.jsx'
import './Components/Img.css'



function App() {
  return (
    <>
      <Header title="Meu site" />

      <Header title="Lorem ipsum" />

      <Header title="Introdução ao React" />

      <ImgCard caption="Lorem ipsum dolor sit amet," />



      <Banner>
        <h1>Bem-Vindo ao meu site</h1>
        <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
      </Banner>
      <Card />
      <Footer title="new Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

    </>
  )
}

export default App
