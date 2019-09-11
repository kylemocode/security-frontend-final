import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: '0分', uv: 2
  },
  {
    name: '1分', uv: 5
  },
  {
    name: '2分', uv: 2
  },
  {
    name: '3分', uv: 1
  },
  {
    name: '4分', uv: 0
  },
  {
    name: '5分', uv: 7
  },
  {
    name: '6分', uv: 2
  },
  {
    name: '7分', uv: 4
  },
  {
    name: '8分', uv: 2
  },
  {
    name: '9分', uv: 1
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
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
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}