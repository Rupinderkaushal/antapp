import React from 'react';
import {Button, Table, Tag, Space} from 'antd';

import "../scheduled race/Scheduled.css";
const Results = () => {
    const columns = [
        {
          title: 'Event',
          dataIndex: 'event',
          key: 'event',
         },
         {
            title: 'Ran On',
            dataIndex: 'ranon',
            key: 'ranon',
          },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Pecking Order',
          dataIndex: 'order',
          key: 'order',
        },
        {
            title: 'Distance',
            dataIndex: 'distance',
            key: 'distance',
          },
          {
            title: 'Terrain',
            dataIndex: 'terrain',
            key: 'terrain',
          },
          {
            title: 'Entry Fee',
            dataIndex: 'entryfee',
            key: 'entryfee',
          },
          {
            title: 'PrizePool',
            dataIndex: 'pool',
            key: 'pool',
          },
        {
          title: 'Replay',
          key: 'Replay',
        
        },
      ];
      const data =[]
  return (
    <div>
    <div className='btn-div'>
        <Button type='primary'  style={{fontWeight:"bolder",fontStyle:"italic"}}><p><span><label style={{color:"yellow",marginRight:"5px"}}>0</label><label id='races' >RACES</label></span> <span><label style={{color:"green",marginLeft:"5px",marginRight:"5px"}}>$0</label><label id="money text" >WON</label></span> </p></Button>
        <Button type='primary' >Refresh</Button>
    </div>
    <div className='table-div'>
    <Table columns={columns}
    pagination= {false}
     dataSource={data} 
      onRow={(record, rowIndex) => {
        console.log("record",record)
        console.log("rowindex",rowIndex)
        return{
          onClick:()=>{console.log("clicked row",rowIndex)}
        }
      }}
    />
    </div>
</div>
  )
}

export default Results;