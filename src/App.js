
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import ContentPage from './components/ContentPage/ContentPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <div className='maincontent'>
      <SideMenu />
      <ContentPage />
    </div>
    <Footer />
    </div>
  );
}

export default App;
