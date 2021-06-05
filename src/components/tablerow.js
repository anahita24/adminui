import React, { useEffect, useState } from "react"
const TableRow=(props)=>{
    const [editpressed,setEditpressed]=useState(false);
    const [tempname,setTempname]=useState(props.element.name);
    const [tempemail,setTempemail]=useState(props.element.email);
    const [temprole,setTemprole]=useState(props.element.role);
    const [checked,setchecked]=useState(false)
    const bgcolor=React.useRef(null)
    useEffect(function (){
   if(props.allchecked.includes(props.element.id))
   setchecked(true)
   else
   setchecked(false)
   console.log("val"+props.allchecked);
   if(checked)
   {
     bgcolor.current.style.background="grey"
   }
   else
   bgcolor.current.style.background="white"
    },[[],props.allchecked])
    function changename(event)
    {
        setTempname(event.target.value);
        //console.log(tempname);
    }
    function changeemail(event)
    {
        setTempemail(event.target.value)
        //console.log(tempemail);
    }   
    function changerole(event)
    {
        setTemprole(event.target.value)
        //console.log(temprole);
    }
    function deletenow(event)
    {
        let newelementlist=[...props.elements]
        let val=newelementlist.findIndex(ele=>{if(ele.id===event.target.id) return true; })
        newelementlist.splice(val,1);
        
        console.log(event.target.id);
        console.log(newelementlist);
        props.setElement(newelementlist);
    }
    function editnow(event)
    {
        console.log(event.target.id);
        setEditpressed(true);
    }
    function save(event)
    {
        let newelementlist=[...props.elements]
        let val=newelementlist.findIndex(ele=>{if(ele.id===event.target.id) return true; })
        newelementlist[val].name=tempname;
        newelementlist[val].email=tempemail;
        newelementlist[val].role=temprole;
        props.setElement(newelementlist);
        setEditpressed(false);
        //console.log(newelementlist[val]);
    }
    function backtoprev()
    {
        setEditpressed(false);
    }
    function checkboxset(id)
    {
    // console.log(id);
     let checklist=[...props.allchecked]
     if(checklist.includes(id))
     {
        let val= checklist.findIndex(element=>(element===id))
        checklist.splice(val,1);
     }
     else
     checklist.push(id)
     props.setallchecked(checklist);
    // console.log(checklist);
    }
    if (!editpressed)
    return (<tr ref={bgcolor}><td>< input onClick={()=>checkboxset(props.element.id)} checked={checked} type="checkbox" id={props.element.id}></input></td><td>{props.element.name}</td>
        <td>{props.element.email}</td>
        <td>{props.element.role}</td><td><button className="glyphicon glyphicon-pencil" id={props.element.id} onClick={(event)=>editnow(event)}></button><button className="glyphicon glyphicon-trash btn-danger" id={props.element.id} onClick={(event)=>deletenow(event)}></button></td></tr>)
        else
        return (<tr ref={bgcolor}><td></td><td><input type="text" placeholder={props.element.name} onChange={(event)=>changename(event)}/></td>
            <td><input type="email" placeholder={props.element.email} onChange={(event)=>changeemail(event)}/></td>
            <td><input type="text" placeholder={props.element.role} onChange={(event)=>{changerole(event)}}/></td><td><button className="glyphicon glyphicon-ok btn-success" id={props.element.id} onClick={(event)=>save(event)}></button><button className="glyphicon glyphicon-share-alt btn-warning" id={props.element.id} onClick={backtoprev}></button></td></tr>)
}
export default TableRow;