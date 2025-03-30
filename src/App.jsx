import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import Photos from '../components/photos';
import Body2 from '../components/Body2';
import Body3 from '../components/Body3';
import Video from '../components/video';

const App = () => {
  return (
    <div className="overflow-x-hidden">
       <Header/>
       <Body/>
       <Photos/>
       <Body2/>
       <Body3/>
       <Video/>
 
       <div className="text-red-700">
         App
       </div>
    </div>
  );
};
 

export default App;


