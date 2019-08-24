import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {
  const classes = useStyles();

  const textStyle = {
    fontFamily: '微軟正黑體',
    fontWeight: '500',
    color: 'rgba(0,0,0,0.8)'
  };

  return (
    <div className={classes.root} style={{marginTop:'-12px'}}>
      <Paper elevation={0} className={classes.paper} style={{backgroundColor:'#FAFAFA'}}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Typography color="textPrimary" style={{...textStyle,color: props.currentLayer1&&"rgba(0,0,0,1)",fontWeight: props.currentLayer1&&"900",textDecoration:props.currentLayer1&&"underline"}}>電腦資訊與掃描紀錄</Typography>
          <Typography color="textPrimary" style={{...textStyle,color: props.currentLayer2&&"rgba(0,0,0,1)",fontWeight: props.currentLayer2&&"900",textDecoration:props.currentLayer2&&"underline"}}>單一掃描紀錄與檔案列表</Typography>
          <Typography color="textPrimary" style={{...textStyle,color: props.currentLayer3&&"rgba(0,0,0,1)",fontWeight: props.currentLayer3&&"900",textDecoration:props.currentLayer3&&"underline"}}>檔案掃描資訊</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}