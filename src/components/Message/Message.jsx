function Message ({ message }) {
    return (
            <div className={'message'}>
                <h4>{ message.author }</h4>
                <p>{ message.text }</p>
            </div>
    );
}

export default Message;