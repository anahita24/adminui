import React, { useEffect, useState } from "react"
import Pageval from "./pageval.js";
import TableRow from "./tablerow.js"
//import 'bootstrap/dist/css/bootstrap.css';
import Delete from "./delete.js"
const Admin=(props)=>{
        const [pageno,setPageno]=useState(1);
        const [elementsofpage,setElementsofpage]=useState([]);
        const [pagination,setPagination]=useState(10);
        const [allchecked,setallchecked]=useState([]);
        const [headcheck,setheadcheck]=useState(false);
        useEffect(function(){
                setPageno(1);
                //console.log(props.displayelements);
                let elementsofpage1=props.displayelements.filter((element,index)=>{return index>=(pagination*(pageno-1)) && index<(pagination*pageno)})
                setElementsofpage(elementsofpage1);
                setheadcheck(false);
                setallchecked([]);
        },[props.displayelements])
        
        useEffect(function(){
                var pg=pageno;
                //console.log(props.displayelements);
                let elementsofpage1=props.displayelements.filter((element,index)=>{return index>=(pagination*(pg-1)) && index<(pagination*pg)})
                setElementsofpage(elementsofpage1);
                setheadcheck(false);
        },[pageno])
       
        function selectall(elementlist)
        {
                if(!headcheck)
                {
                let altlist=[...allchecked]
             elementlist.map(element=>{
                     if(altlist.includes(element.id))
                     ;
                     else
                      altlist.push(element.id);

             })
             setallchecked(altlist);
             setheadcheck(true);
        }
        else
        {
                let altlist=[...allchecked]
                elementlist.map(element=>{
                        if(altlist.includes(element.id))
                        {
                                let val= altlist.findIndex(ele=>(ele==element.id))
                                altlist.splice(val,1);
                        }
                        else;
   
                })
                setallchecked(altlist);
                setheadcheck(false);     
        }
        }
        return (<><table className="table">
<thead><tr><th><input type="checkbox" checked={headcheck} onClick={()=>selectall(elementsofpage)}></input></th>
    <th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr></thead>
     <tbody>{elementsofpage.map(element=>{ 
return (<TableRow allchecked={allchecked} setallchecked={setallchecked}
     element={element} elements={props.elements} setElement={props.setElement}/>)})} </tbody> </table>
     <Pageval lastindex={props.displayelements.length} pagination={pagination} setPageno={setPageno} pageno={pageno}/>
     <Delete setallchecked={setallchecked}
 allchecked={allchecked} elements={props.elements} setElement={props.setElement}/>
     </>)
}
export default Admin;