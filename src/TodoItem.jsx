import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoItem({t,remove,toggle}){
    const labelId = `checkbox-list-label-${t.id}`;

    const removeTodo=()=>{
        remove(t.id)
    }

    return (
        <ListItem
            secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                <DeleteIcon />
            </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={t.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={t.text} />
            </ListItemButton>
        </ListItem>
    )
}