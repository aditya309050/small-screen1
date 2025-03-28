import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import Photos from '../components/photos';
import Body2 from '../components/Body2';

const App = () => {
  return (
    <div >
       <Header/>
       <Body/>
       <Photos/>
       <Body2/>
 
       <div className="text-red-700">
      App
      </div>
      </div>
    
  );
};

export default App;


