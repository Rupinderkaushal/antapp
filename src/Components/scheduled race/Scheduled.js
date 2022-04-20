import React from 'react';
import {Button, Table, Tag, Space} from 'antd';

import "./Scheduled.css";
const Scheduled = () => {
    const columns = [
        {
          title: 'Event',
          dataIndex: 'event',
          key: 'event',
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
            title: 'PrizePool',
            dataIndex: 'pool',
            key: 'pool',
          },
        {
          title: 'Starts In',
          key: 'startsin',
        
        },
      ];
      const data =[]
  return (
    <div>
    <div className='btn-div'>
        <Button type='primary' >Refresh</Button>
        {/* <Button type='primary' danger><GoSettings style={{marginRight:"5px"}}/>Filter</Button> */}
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

export default Scheduled;