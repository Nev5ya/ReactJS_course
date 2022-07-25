import './App.css';
import Message from './components/Message/Message';
import Button from './components/Message/Button';
import ChatList from './components/Chat/ChatList';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Theme from './Theme';
import List from '@mui/material/List';
import Divider from "@mui/material/Divider";

function App() {
    const [ messageList, setMessageList ] = useState([]);
    const [ author, setAuthor ] = useState('');
    const [ text, setText ] = useState('');
    const [ chatList, setChatList ] = useState([
        {
            chatId: 0,
            name: 'Main'
        },
        {
            chatId: 1,
            name: 'Work'
        },
        {
            chatId: 2,
            name: 'Other'
        }
    ]);
    const authorField = useRef(null);
    const textField = useRef(null);

    useEffect(() => {
        setTimeout( () => replyMessage('message received'), 1500);
        authorField.current.lastChild.firstChild.value = '';
        textField.current.lastChild.firstChild.value = '';
    }, [ messageList ]);

    const replyMessage = ( textReply ) => {
        const lastEntity = messageList[messageList.length - 1];

        if (lastEntity && lastEntity.author !== 'Bot') {
            setMessageList( prevState => [...prevState, {
                id: lastEntity?.id + 1 || 0,
                author: 'Bot',
                text: lastEntity?.author + '\'s ' + textReply,
                chatId: 0 //hardcoded current chat
            }]);
        }
    }

    function sendMessage() {
        setMessageList( prevState => {
            const lastEntity = messageList[messageList.length - 1];

            return !( author && text ) ? prevState
            :
            [...prevState, {
                id: lastEntity?.id + 1 || 0,
                author: author,
                text: text,
                chatId: 0
            }];
        });
    };

    return (
        <ThemeProvider theme={ Theme }>
            <Grid
                container
                alignItems='baseline'
                justifyContent='flex-start'
                gap='150px'
                sx={{ ml:20, mb:5 }}
            >
                <Grid
                    item md={2}
                >
                    <ChatList list={ chatList } />
                </Grid>
                <Grid
                    item md={3}
                    component='form'
                    autoComplete='off'
                    container
                    gap={4}
                    direction='column'
                >
                    <TextField
                        id="outlined-basic"
                        label="Nickname"
                        variant="outlined"
                        onChange={ (e) => setAuthor(e.target.value) }
                        ref={ authorField }
                        autoFocus
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        onChange={ (e) => setText(e.target.value) }
                        ref={ textField }
                    />
                    <Button onClick={ sendMessage } />
                </Grid>
            </Grid>
            <Divider variant="middle" flexItem />
            <Grid
                container
                justifyContent='flex-start'
                sx={{ ml:20, mt:3 }}
            >
                <List>
                    { messageList.map( ( message ) => {
                        return (
                            <Message key={ message.id } message={ message }/>
                        );
                    }) }
                </List>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
