import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import StyledCheckbox from './CheckBox';

import { SELECTED, UNSELECTED, PRODUCT_SELECTED, PRODUCT_UNSELECTED } from '../constants';


const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5),
    },
}));

export default function ConsecutiveSnackbars(props) {

    const queueRef = React.useRef([]);

    const [open, setOpen] = React.useState(false);

    const [messageInfo, setMessageInfo] = React.useState(undefined);

    const processQueue = () => {

        if (queueRef.current.length > 0) {

            setMessageInfo(queueRef.current.shift());

            setOpen(true);

        }
    };

    const handleClick = message => () => {
      
        console.log('IN hanldeCLicked ')
        props.checkBoxClicked();
        queueRef.current.push({
            message,
            key: new Date().getTime(),
        });

        if (open) {
            // immediately begin dismissing current message
            // to start showing new one
            setOpen(false);
        } else {
            processQueue();
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        processQueue();
    };



    const classes = useStyles();
    return (
        <div>
       

            <StyledCheckbox

                value={props.selectedStatus}

                onClick={props.selectedStatus === SELECTED ? handleClick(PRODUCT_UNSELECTED) : handleClick(PRODUCT_SELECTED)}
            />
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                onExited={handleExited}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{messageInfo ? messageInfo.message : undefined}</span>}
                action={[
        //             <Button key="undo" color="secondary" size="small" onClick={handleClose}>
        //                 UNDO
        //   </Button>,
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </div>
    );
}
