import React from 'react';
import "./EnterRace.css";
import {Button, Table, Tag, Space} from 'antd';
import {GoSettings} from 'react-icons/go'
const EnterRace = () => {
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
          title: 'Capacity',
          key: 'capacity',
        
        },
      ];
      
      const data = [
        {
          key: '1',
          event: 'John Brown',
          order: 'A',
          location: 'New York No. 1 Lake Park',
          distance:"100m",
          terrain:"Terr",
          entryfee:"$52",
          description: 'My name is Rupinder Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
          key: '2',
          event: 'Jim Green',
          order: 'B',
          location: 'London No. 1 Lake Park',
          distance:"200m",
          terrain:"Terr",
          entryfee:"$2",
          description: 'My name is Gurpreet Brown, I am 32 years old, living in New York No. 1 Lake Park.',
            
        },
        {
          key: '3',
          event: 'Joe Black',
          order: 'C',
          location: 'Sidney No. 1 Lake Park',
          distance:"100m",
          terrain:"Terr",
          entryfee:"$25",
          description: 'My name is vinay Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
      ];
  return (
    <div className='main-wrapper'>
        <div className='btn-div'>
            <Button type='primary' >Refresh</Button>
            {/* <Button type='primary' danger><GoSettings style={{marginRight:"5px"}}/>Filter</Button> */}
        </div>
        <div className='table-div'>
        <Table columns={columns}
        pagination= {false}
         dataSource={data} 
         expandRowByClick={true}
          expandedRowRender={(record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          )}
          scroll={{ x: 1004 ,y:500 }}
        />
        </div>
    </div>
  )
}

export default EnterRace;