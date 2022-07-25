import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

export default function ChatList({ list }) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleListItemClick = ( chatId ) => {
    	setSelectedIndex(chatId);
  	};

	return (
		<List>
			{ list.map( i => {
				return (
					<ListItemButton
						selected={ selectedIndex === i.chatId }
	          			onClick={ () => {
	          				handleListItemClick(i.chatId);
	          			} }
						key={ i.chatId }
						button
					>
						<ListItemAvatar>
							<Avatar>
								<ForumOutlinedIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={ i.name } />
					</ListItemButton>
				);
			}) }
		</List>	
	);
}