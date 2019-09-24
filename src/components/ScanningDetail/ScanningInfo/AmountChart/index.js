import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  
} from 'recharts';

// const data = [
//   {
//     name: '0分', 數量: 2
//   },
//   {
//     name: '1分', 數量: 5
//   },
//   {
//     name: '2分', 數量: 2
//   },
//   {
//     name: '3分', 數量: 1
//   },
//   {
//     name: '4分', 數量: 0
//   },
//   {
//     name: '5分', 數量: 7
//   },
//   {
//     name: '6分', 數量: 2
//   },
//   {
//     name: '7分', 數量: 4
//   },
//   {
//     name: '8分', 數量: 2
//   },
//   {
//     name: '9分', 數量: 1
//   }
// ];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';
  
  render() {
    
    const data = [
      {
        name: '0分', 數量: this.props.amountCounter[0] || 0
      },
      {
        name: '1分', 數量: this.props.amountCounter[1] || 0
      },
      {
        name: '2分', 數量: this.props.amountCounter[2] || 0
      },
      {
        name: '3分', 數量: this.props.amountCounter[3] || 0
      },
      {
        name: '4分', 數量: this.props.amountCounter[4] || 0
      },
      {
        name: '5分', 數量: this.props.amountCounter[5] || 0
      },
      {
        name: '6分', 數量: this.props.amountCounter[6] || 0
      },
      {
        name: '7分', 數量: this.props.amountCounter[7] || 0
      },
      {
        name: '8分', 數量: this.props.amountCounter[8] || 0
      },
      {
        name: '9分', 數量: this.props.amountCounter[9] || 0
      }
    ]
    return (
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="數量"/>
        <Tooltip />
        <Bar dataKey="數量" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="數量" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}