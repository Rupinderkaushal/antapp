import React from 'react';
import "./Home.css";
import { Tabs } from 'antd';
import EnterRace from '../enterRace/EnterRace';
const { TabPane } = Tabs;
const Home = () => {
    function callback(key) {
        console.log(key);
      }
  return (
    <div className='home-div'>
   <div style={{padding:"20px"}}>
   <Tabs  defaultActiveKey="1" onChange={callback}>
    <TabPane  tab="Enter Race" key="1">
      <EnterRace/>
    </TabPane>
    <TabPane tab="Scheduled Races" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Results" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
   </div>
    </div>
  )
}

export default Home;