
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {
  const [namestate, setnamestate] = useState("");
  const [stateclass, setstateclass] = useState("");
  const [load,setload] = useState(false)

  const search = () => {
    axios.post(`http://localhost:4000/post`, {
      name: namestate,
      class: stateclass,
    })
      .then((res) => {
        setload(!false)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/posts`)
      .then((res) =>console.log(res))
      .catch((err) => console.log(err))
  }, [load]);

  return (
    <div className="App">
      <button onClick={search}>send data</button>
      {/* <button onClick={get}>get all data</button> */}

      <div>
        <input type="text" value={namestate} onChange={(e) => setnamestate(e.target.value)} />
        <input type="text" value={stateclass} onChange={(e) => setstateclass(e.target.value)} />
      </div>

    </div>
  );
}

export default App;
