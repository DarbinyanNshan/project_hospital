import { useEffect, useState } from 'react';
import './App.css';
import { Router } from './layouts/router';
import "./i18n";
import LoadingComponent from './components/loading';
import BackToTopButton from './components/backToButton';
import { Footer } from './components/footer';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='App' >
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <Router />
          <BackToTopButton/>
        </div>
      )}
    </div>
  );
}

export default App;
