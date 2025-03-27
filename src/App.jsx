import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import Photos from '../components/photos';

const App = () => {
  return (
    <div >
       <Header/>
       <Body/>
       <Photos/>
 
       <div className="text-red-700">
      App
      </div>
      </div>
    
  );
};

export default App;


