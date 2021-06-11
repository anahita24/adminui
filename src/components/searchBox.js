import React from "react"
const SearchBox=(props)=>{
    
    function updateval(event)
    {
        props.setSearchval(event.target.value)
    }
    
    return (<div class="input-group">
    <span class="input-group-addon glyphicon glyphicon-search"></span>
    <input onChange={(event)=>{updateval(event)}}class="form-control" type="text" placeholder="Search any element by name ,email ,role"/>
    </div>)
}
export default SearchBox;