import './App.css';
import Display from './Components/Display';
import Search from './Components/Search';
import {useCallback, useEffect, useState} from "react";
import { key } from './Key';
function App() {
  const [imgName, setImgName] = useState("");
  const [error,setError]=useState("");
  const [imgList, setImgList] = useState([]);

  const getData = useCallback(async() => {
    try{
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${imgName}&client_id=${key}&per_page=20`);
      if(!response.ok){
        throw new Error(`message ${response.status}`);
      }
      let actualData = await response.json();
      console.log(actualData.results);
      setImgList(actualData.results);
      setError(null);
    }
    catch(err){
      setImgList([]);
      setError(err.message);
    }
  },[imgName]);
  
  useEffect(() => {
    getData();
  },[getData]);

  return (
    <div className="App">
      <Search imgName={imgName} setImg={setImgName}/>
      {error && <h1>{error}</h1>}
      {imgName===""?<h1>Type in search bar to search images</h1>:""}
      <Display imgList={imgList}/>
    </div>
  );
}

export default App;
