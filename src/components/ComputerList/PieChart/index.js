import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

// const data = [
//   { name: 'Group A', value: 1 },
//   { name: 'Group B', value: 2 },
//   { name: 'Group C', value: 1 }
// ];

const COLORS = ['#55ed6c', '#f0a33e', '#de351f'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class PieChartComponent extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
  state = {
    data: []
  }
  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }
  render() {
    
    return (
      <PieChart width={200} height={200}>
        <Pie
          data={this.state.data}
          cx={110}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}

export default PieChartComponent;