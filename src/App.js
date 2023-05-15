import React, { useState, useEffect } from 'react'
import SideDrawer from './components/SideDrawer';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
const App = () => {
  useEffect(() => {
    axios.get('https://random-flat-colors.vercel.app/api/random?count=5 ').then(
      (res) => { setSanthu(res.data.colors) }
    )
  }, [])
  useEffect(()=>{
    console.log("thriveni")
  },[])
  const [santhu, setSanthu] = useState();
  const [data, setdata] = useState([])
  let progressdata = data.length * parseInt(20)
  console.log("data", data);
  const [creative, setCreative] = useState(false);
  const [filters, setfilters] = useState(data);
  const [flexy,setflexy] = useState(false)
  console.log("filters", filters)
  useEffect(()=>{
    if(creative){
      setflexy(true)
    }
  },[creative])
  function filter(e) {
    console.log("e.target.value");
    setfilters(data.filter((fil) => { return fil.text.title === e.target.value }))
  }
  function filtercolor(san){
    setfilters(data.filter((fil) => { return fil.text.tcolor === san }))
  }
  const creamp = () => {
    setCreative(true)
  }
  return (
    <div>
      <div>
        <h2>Filtering</h2>
        <label>Title</label>
        <input placeholder="filter by input" onChange={(e) => filter(e)} />
        <label>filter by colors</label>
        {santhu?.map((san) => {
          return <svg height="100" width="100">
            <circle onClick={() => { filtercolor(san) }} cx="50" cy="50" r="10" stroke="black" strokeWidth="3" fill={san} />
          </svg>
        })}
      </div>
      <div>
        <SideDrawer show={creative} setShow={setCreative} setdata={setdata} data={data} santhu={santhu} setflexy={setflexy}/>
        <div style={{ width: "700px" }}>
          <h5>progress</h5>
          <div>
            <div style={{ marginLeft: "300px" }}>
              {data.length}/5
            </div>
            <ProgressBar now={progressdata} />
          </div>
        </div>
        <div>
          <button onClick={() => creamp()} disabled={flexy}>+Add Creative</button>
        </div>
        <br></br>

        <div style={{ marginLeft: "40px" }}>
          {filters.length > 0 ?
            <div >
              {filters.map((text) => <div style={{ backgroundColor: text.text.tcolor, width: "80px", height: "50px" }}>{text.text.title} <br></br> {text.text.subtitle}</div>)}
            </div>
            :
            <div >
              {data.map((text) => <div style={{ backgroundColor: text.text.tcolor, width: "80px", height: "50px" }}>{text.text.title} <br></br> {text.text.subtitle}</div>)}
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default App