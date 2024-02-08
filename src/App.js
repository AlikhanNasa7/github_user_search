import './App.css';
import Header from './components/Header/Header';
import Search from './components/search/Search';
import Body from './components/Body/Body';
import { useState } from 'react';
function App() {

  const [data, setData] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const getUserData = (datafromsearch,feedback)=>{
    setData(datafromsearch)
    setFeedback(feedback)
    console.log(datafromsearch)
  }
  return (
    <div className="App">
      <Header/>
      <Search getUserData={getUserData}/>
      <Body data={data} feedback={feedback}/>
    </div>
  );
}

export default App;
