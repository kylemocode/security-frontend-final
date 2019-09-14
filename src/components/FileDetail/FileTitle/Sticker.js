import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function SmallOutlinedChips() {
  const classes = useStyles();

  function handleDelete() {
    console.log('clicked')
  }

  function handleClick() {
    console.log('clicked')
  }

  return (
    <div className={classes.root}>
        <Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>簽</Avatar>}
            label="Primary Clickable Chip"
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />
        <Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>安全</Avatar>}
            label="Primary Clickable Chip"
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />
        <Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>危</Avatar>}
            label="Primary Clickable Chip"
            clickable
            className={classes.chip}
            color="secondary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />
        <Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>熵</Avatar>}
            label="Primary Clickable Chip"
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />
         <Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>MB</Avatar>}
            label="Primary Clickable Chip"
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />
    </div>
  );
}
