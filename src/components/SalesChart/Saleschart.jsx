import React, { PureComponent } from "react";
import {
  BarChart, XAxis,
  Bar, Cell,
  ResponsiveContainer,Legend
} from "recharts";
import './Saleschart.css'
const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: " B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: " C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: " D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: " E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: " F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: " G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getCustomShapePath = (x, y, width, height, borderRadius) => {
  const radius = borderRadius || 5; // Default border radius
  
  // Halve the width
  const halfWidth = width / 2;
  
  const path = `
    M${x + radius},${y}
    L${x + halfWidth - radius},${y}
    Q${x + halfWidth},${y} ${x + halfWidth},${y + radius}
    L${x + halfWidth},${y + height - radius}
    Q${x + halfWidth},${y + height} ${x + halfWidth - radius},${y + height}
    L${x + radius},${y + height}
    Q${x},${y + height} ${x},${y + height - radius}
    L${x},${y + radius}
    Q${x},${y} ${x + radius},${y}
    Z
  `;
  
  return path;
};

const CustomShape = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  // Adjust the width to be 50% of the original width
  const halfWidth = width / 2;

  return <path d={getCustomShapePath(x, y, halfWidth, height)} stroke="none" fill={fill} />;
};

const maxUV = Math.max(...data.map((item) => item.uv));

export default class SalesChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-bar-chart-35meb";

  render() {
    return (
     
      <ResponsiveContainer className="chart" width="74%" height="25%">
        <BarChart width={30} height={40} data={data}>
          <XAxis dataKey="name" axisLine={false} tick={true} />
          
          <Bar dataKey="uv" fill="rgba(117, 25, 235, 0.3)" shape={<CustomShape />}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                cursor="pointer"
                fill={entry.uv === maxUV ? '#7519EB' : 'rgba(117, 25, 235, 0.3)'}
              />
            ))}
          </Bar>
          
        </BarChart>
      </ResponsiveContainer>
      
    );
  }
}
