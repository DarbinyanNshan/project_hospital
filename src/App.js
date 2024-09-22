import { useEffect, useState } from 'react';
import './App.css';
// import LoadingPage from './components/loading';
import { Router } from './layouts/router';
import "./i18n";
import LoadingComponent from './components/loading';


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
        </div>
      )}
    </div>
  );
}

export default App;
