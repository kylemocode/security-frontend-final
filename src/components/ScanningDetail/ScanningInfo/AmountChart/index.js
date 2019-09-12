import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
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
  state = {
      score: {}
  }
  componentDidMount() {
    let score = {
      zero: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0
    }
    this.props.amountChartData.forEach((scoredata) => {
      if(scoredata === 0) {
        score.zero+=1;
      }
      if(scoredata === 1) {
        score.one+=1;
      }
      if(scoredata === 2) {
        score.two+=1;
      }
      if(scoredata === 3) {
        score.three+=1;
      }
      if(scoredata === 4) {
        score.four+=1;
      }
      if(scoredata === 5) {
        score.five+=1;
      }
      if(scoredata === 6) {
        score.six+=1;
      }
      if(scoredata === 7) {
        score.seven+=1;
      }
      if(scoredata === 8) {
        score.eight+=1;
      }
      if(scoredata === 9) {
        score.nine+=1;
      }
    })
    this.setState({
      score
    })
    
  }
  render() {
    const data = [
      {
        name: '0分', 數量: this.state.score.zero
      },
      {
        name: '1分', 數量: this.state.score.one
      },
      {
        name: '2分', 數量: this.state.score.two
      },
      {
        name: '3分', 數量: this.state.score.three
      },
      {
        name: '4分', 數量: this.state.score.four
      },
      {
        name: '5分', 數量: this.state.score.five
      },
      {
        name: '6分', 數量: this.state.score.six
      },
      {
        name: '7分', 數量: this.state.score.seven
      },
      {
        name: '8分', 數量: this.state.score.eight
      },
      {
        name: '9分', 數量: this.state.score.nine
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
        <YAxis />
        <Tooltip />
        <Bar dataKey="數量" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="數量" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}