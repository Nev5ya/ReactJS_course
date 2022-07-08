function Input(props) {
    return (
        <input
            type={'text'}
            value={props.value}
            placeholder={props.placeholder}
            className={'input'}
            onChange={props.onChange}
        />
    );
}

export default Input;