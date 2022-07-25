import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Message ({ message }) {
    return (
            <ListItem
                variant='outlined'
                alignItems="flex-start"
                sx={{ maxWidth: '600px'}}
            >
                <ListItemAvatar>
                    <Avatar>
                        <PersonOutlineIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={ message.author }
                    secondary={ message.text }
                    primaryTypographyProps={{ fontSize: '1.3em' }}
                    secondaryTypographyProps={{ fontSize: '1.1em' }}
                />
            </ListItem>
    );
};