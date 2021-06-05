import React from "react"
const Delete=(props)=>{
    function deleteall(element,allchecked)
    {
        let newval=element.filter((element)=>{if(!allchecked.includes(element.id)) return true})
        console.log(newval);
        props.setElement(newval);
        props.setallchecked([])
    }
    return (<button class="btn btn-danger"onClick={()=>deleteall(props.elements,props.allchecked)}>Delete</button>)
}
export default Delete;