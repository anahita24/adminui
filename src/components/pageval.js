import React from "react"
const Pageval=(props)=>
{
    const listpage=[];
    for(let i=1;i<=parseInt(props.lastindex/props.pagination+0.99);i++)
    {
        listpage.push(i);
    }
    function changepage(event)
    {
        props.setPageno(event.target.id);
    }
    function pageminus()
    {
        if(props.pageno>1)
        props.setPageno(parseInt(props.pageno)-parseInt(1))
    }
    function pageplus()
    {
    if(props.pageno<parseInt(props.lastindex/props.pagination+0.9))
    props.setPageno(parseInt(props.pageno)+parseInt(1))
    }
    if(props.lastindex!==0)
return (<ul class="list-group list-group-horizontal-sm">
    <li class="glyphicon glyphicon-chevron-left btn-sm btn-info" onClick={()=>props.setPageno(1)}></li>
    <li onClick={pageminus} class="glyphicon glyphicon-chevron-left btn-sm btn-info "></li>
    {listpage.map((element)=>{
        return (<li class="btn btn-info" key={element} id={element} onClick={(event)=>changepage(event)}>{element}</li>)})}
        <li onClick={pageplus} class="glyphicon glyphicon-chevron-right	btn-sm btn-info"></li>
<li class="glyphicon glyphicon-chevron-right btn-sm btn-info" onClick={()=>props.setPageno(parseInt(props.lastindex/props.pagination+0.9))}>
    </li></ul>)
else
return (<div class="alert alert-primary" role="alert">
No Element Found
</div>
)
}
export default Pageval;