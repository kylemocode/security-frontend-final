import React from "react";
import MUIDataTable from "mui-datatables";
import { history } from '../../../routers/AppRouter';

export default class App extends React.Component {
  
  render() {
    
    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: "none",
      onRowClick: rowData => history.push(`${this.props.nextUrl}${rowData[0]}`),
      expandableRowsOnClick: true
    };

    return (
        <MUIDataTable
          title={this.props.title}
          data={this.props.data}
          columns={this.props.columns}
          options={options}
          
        />
    );
  }
}


