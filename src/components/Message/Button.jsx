function Button(props) {
    return (
        <span>
            <button
                type={'button'}
                className={'custom-btn btn-1'}
                onClick={ props.onClick }
            >Отправить</button>
        </span>
    );
}

export default Button;