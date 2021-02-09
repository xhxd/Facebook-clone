import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import "./SimplePopover.css";
import SimpleModal from './SimpleModal';
import Button from '@material-ui/core/Button';
import db from "./firebase";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';



const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

function SimplePopover() {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = e => {
    e.preventDefault();

    db.collection("posts").doc().delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
        <div className="simplePopover">
            <IconButton>
                <MoreVertIcon className="post__moreIcon" onClick={handleClick}/>
                </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <Typography className={classes.typography}>
            <SimpleModal 
            body={
            <div className="delete__modal">
              <div>
              <div className="deleteModal__title">
                <h1>Are you sure that you want to delete the post?</h1>
              </div>
              <div className="deleteModal__button">
              <Button size="large" variant="outlined" color="primary" onClick={handleDelete}>Yes</Button>
              <Button size="large" variant="outlined" color="Secondary" onClick={handleClose}>No</Button>
              </div>
              </div>
            </div>
            }
            opensrc={
              <div className="delete__button">
                <DeleteForeverOutlinedIcon />
                <h3>Delete</h3>
              </div>}/>
        </Typography>
      </Popover>
        </div>
    )
}

export default SimplePopover
