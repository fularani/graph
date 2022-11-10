// import { Card,Tabs } from 'antd';
import { Card } from 'antd';
import * as React from 'react';
import ReactTooltip from "react-tooltip";
import MapChart from "./MapCharts";
// import DemoLine from "./DemoLine"

const Cards = () => {

  // const onChange = (key) => {
  //   console.log(key);
  // };
  const [content, setContent] = React.useState("");
  // const [count,setCount]=React.useState(null);
  
  return (
    <div>
    <Card style={{
      height:400,
      width: 700,
      }}
      className='card'
    >
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
   {/**  <Tabs
    defaultActiveKey="1"
    tabPosition="bottom"
    onChange={onChange}
    items={[
      {
        label: `Users`,
        key: '1',        
        // children: `7`,
      },
      {
        label: `New users`,
        key: '2',
        // children: `7`,
      },
      {
        label: `Average engagement time`,
        key: '3',
        // children: `0m 38s`,
      },
      {
        label: `Total revenue`,
        key: '4',
        // children: `₹0.00`,
      },
    ]}
    />
    <DemoLine/>*/}
    </Card>
   </div>    
  )
}

export default Cards
