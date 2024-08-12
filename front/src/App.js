import NavigationBar from './containers/NavigationBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './containers/Footer';
import AppRouter from './router';


function App() {
  return (
    <>
      <NavigationBar/>
      <AppRouter/>
      <Footer/>
    </>    
  );
}

export default App;
