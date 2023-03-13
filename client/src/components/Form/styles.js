import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        // border: '2px solid green',
        position: 'fixed',
        marginLeft: '-40px',
        marginRight: '50px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    [theme.breakpoints.down('sm')]: {
        paper: {
            padding: theme.spacing(2),
            // border: '2px solid green',
            position: 'relative',
            marginLeft: '0px',
            marginRight: '0px',
        },
    }

}));