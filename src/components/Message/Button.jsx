function Button(props) {
    return (
        <button
            type={'button'}
            className={'confirm-button'}
            onClick={ props.func }
        >Подтвердить</button>
    );
}

export default Button;