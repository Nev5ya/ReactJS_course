import ButtonMui from '@mui/material/Button';

export default function Button(props) {
    return (
            <ButtonMui
                color='primary'
                variant='contained'
                disableElevation
                type={'button'}
                className={'custom-btn btn-1'}
                onClick={ props.onClick }
            >Send</ButtonMui>
    );
}
