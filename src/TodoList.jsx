import { useState,useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';
import {v4 as uuid} from 'uuid'
import { Box, Typography } from '@mui/material';

const getInitialData=()=>{
    const data=JSON.parse(localStorage.getItem("todo"))
    if(!data)   return []
    return data
}



export default function TodoList(){
    const [todo,setTodo]=useState(getInitialData)
    
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(todo))
    },[todo])

    const removeTodo=(id)=>{
        setTodo((prevData)=>{
            return prevData.filter((t)=>t.id!==id)
        })
    }
    const toggleTodo=(id)=>{
        setTodo((prevData)=>{
            return prevData.map((t)=>{
                if(t.id===id){
                    return {...t,completed:!t.completed}
                }
                else{
                    return t
                }
            })
        })
    }

    const addTodo=(text)=>{
        setTodo((prevData)=>{
            return [
                ...prevData,
                {text:text,id:uuid(),completed:false}
            ]
        })
    }

    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            m:3
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>  
                Todos
            </Typography>  
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todo.map((t) =>(
                    <TodoItem t={t} key={t.id} remove={removeTodo} toggle={()=>toggleTodo(t.id)} />
                ))}
                <CreateTodo addTodo={addTodo}/>
            </List>
        </Box>
        
                
    )
}















//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
