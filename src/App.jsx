import AboutUs from "./components/HomePage/HomePage/AboutUs";
import Header from "./components/HomePage/HomePage/Header";

function App() {
  return (
    <div className='wrapper clear'>
      <Header />
      <section className='section mt-15 mb-15'>
        <div className='sectionLeft'>
          <div className='infoStyle'>
            <div className='appear-item'></div>
            <span>Стили женской одежды</span>
          </div>
        </div>
        <div className='sectionRight'>
          <div className='first shop'>
            <div className='appear-item'></div>
            <span>Индивидуальный пошив</span>
          </div>
          <div className='second shop'>
            <div className='appear-item'></div>
            <span>Купить готовое</span>
          </div>
        </div>
      </section>
      <AboutUs />
    </div>
  );
}

export default App;
