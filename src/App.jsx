import './App.css';
import Message from './components/Message/Message';
import Button from './components/Message/Button';
import { useEffect, useRef, useState } from 'react';

function App() {
    const [ messageList, setMessageList ] = useState([]);
    const [ author, setAuthor ] = useState('');
    const [ text, setText ] = useState('');
    const authorField = useRef(null);

    const textField = useRef(null);

    useEffect(() => {
        setTimeout( () => replyMessage('message received'), 1500);
        authorField.current.value = '';
        textField.current.value = '';
    }, [ messageList ]);

    const replyMessage = ( textReply ) => {
        const lastEntity = messageList[messageList.length - 1];

        if (lastEntity && lastEntity.author !== 'Bot') {
            setMessageList( prevState => [...prevState, {
                id: lastEntity?.id + 1 || 0,
                author: 'Bot',
                text: lastEntity?.author + '\'s ' + textReply
            }]);
        }
    }

    function sendMessage() {
        setMessageList( prevState => {
            const lastEntity = messageList[messageList.length - 1];

            return [...prevState, {
                id: lastEntity?.id + 1 || 0,
                author: author || 'Bot',
                text: text
            }];
        });
    };

    return (
        <div className={ 'container' }>
            <form className={ 'form' }>
                <div className="input-wrapper">
                    <input
                        type={'text'}
                        value={author}
                        placeholder={'Автор'}
                        className={'input'}
                        onChange={ (e) => setAuthor(e.target.value) }
                        ref={ authorField }
                    />
                    <input
                        type={ 'text' }
                        value={ text }
                        placeholder={ 'Сообщение' }
                        className={ 'input' }
                        onChange={ (e) => setText(e.target.value) }
                        ref={ textField }
                    />
                </div>
                <Button onClick={ sendMessage } />
            </form>
            { messageList.map( ( message ) => {
                return (
                    <Message key={ message.id } message={ message }/>
                );
            }) }
        </div>
    );
}

export default App;
