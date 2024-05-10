import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function CreateTodo({addTodo}){
    const[text,setText]=useState("")
    
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(text)
        setText("")
    }
    return(
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic"
                    label="Add Todo" 
                    variant="outlined"
                    value={text} 
                    onChange={handleChange}
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                                <IconButton aria-label="Create-todo" edge="end" onClick={handleSubmit}>
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem>
        
    )
}