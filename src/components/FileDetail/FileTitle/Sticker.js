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

export default function SmallOutlinedChips(props) {
  const classes = useStyles();

  function handleDelete() {
    console.log('clicked')
  }

  function handleClick() {
    console.log('clicked')
  }

  return (
    <div className={classes.root}>
      {props.signed==='Signed'?<Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>簽</Avatar>}
            label="Signature Verification"
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />: null}
        
        {props.score<4?<Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>安全</Avatar>}
            label="Safe File"
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />: null}
        
        {props.entropy?<Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>熵</Avatar>}
            label={`Entropy: ${props.entropy}`}
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />: null}
        
        {props.score > 6?<Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>危</Avatar>}
            label="Dangerous File"
            clickable
            className={classes.chip}
            color="secondary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />: null}
        
        {props.packed.length ?<Chip
            variant="outlined"
            size="small"
            avatar={<Avatar>殼</Avatar>}
            label="Peutils Packed 已加殼"
            clickable
            className={classes.chip}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
        />: null}
         
    </div>
  );
}

SmallOutlinedChips.defaultProps = {
  packed: []
}