import React,{useEffect,useState} from "react"
import './App.css';
import Admin from './components/admin.js';
import SearchBox from './components/searchBox.js';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [element,setElement]=useState([]);
  const [searchval,setSearchval]=useState("");
useEffect(()=>{
  fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json').then(
    result=>result.json()
  ).then(element=>{
    console.log(element)
    setElement(element);
  }
  ).catch((error)=>{console.log('Error',error);
})
},[])
  
   let newelement=element.filter((element)=>{return element.name.toLowerCase().includes(searchval.toLowerCase()) || element.email.toLowerCase().includes(searchval.toLowerCase()) || element.role.toLowerCase().includes(searchval.toLowerCase())})
  return (<><SearchBox searchval={searchval} setSearchval={setSearchval}/><Admin elements={element} displayelements={newelement} setElement={setElement}/></>)
}

export default App;
