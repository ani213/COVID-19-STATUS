import React from 'react';
import './App.css';
import Home from "./components/Home";
import Card from './components/common/Card';
import 'aos/dist/aos.css';


function App() {
  return (
    <div>
      <Card>
        <Home />
      </Card>
    </div>
  );
}

export default App;
