import './App.css';
import  Index  from './components/Index';
import  Header  from './components/Header';
import Classes from './components/Classes';
import Footer from './components/Footer';
import Registration from './components/Registration';
import JoinForm from './components/JoinForm';


function App() {
  return (
    <div>
      <Index />
      <Header />
      <Classes/>
      <Registration/>
      <JoinForm />
      <Footer />
    </div>
  );
}
export default App;
