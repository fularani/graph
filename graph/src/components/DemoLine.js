import React from 'react';
import { Line } from '@ant-design/plots';

const DemoLine = () => {

//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };

const data = [
  {
    Date: "16 Oct",
    users: 0
  },
  {
    Date: "23",
    users: 0
  },
  {
    Date: "30",
    users: 0
  },
  {
    Date: "2 Nov",
    users: 0
  },
  {
    Date: "14 Nov",
    users: 4
  },
  {
    Date: "16 Nov",
    users: 4
  }
];

const config = {
  data,
  autoFit: true,
  height: 250,
  padding: "auto",
  xField: "Date",
  yField: "users",
  legend: false,
  meta: {
    users: {
      max: 5,
      min: 0
    }
  },
  xAxis: {
    tickCount: 5
  },
  yAxis: {
    position: "right"
  },
  geometryOptions: [       
        {
          geometry: "line",
          color: "#cc8899",
          // point: {
          //   shape: 'breath-point',
          // },
        }, 
  ]
};

  return (
    <Line {...config} />
  )
}

export default DemoLine
