import React from 'react';
import "./Navbar.css";
import { Menu, Dropdown,Button } from 'antd';
import {Link} from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
const Navbar = () => {
    const menu = (
      <div className='menu-div'>
        <ul>
          <li><Link to='#'>Enter Race</Link></li>
          <li><Link to='#'>Scheduled Race</Link></li>
          <li><Link to='#'>Results</Link></li>
        </ul>
      </div>
      );
      const ants = (
        <div className='menu-div'>
          <ul>
            <li><Link to='#'>My Ants</Link></li>
            <li><Link to='#'>Buy Ants</Link></li>
          </ul>
        </div>
        );
  return (
      <div className='navbar-div'>
      <div className='navbar-wrapper'>
      <div>
          <Link to='#'>AntPro</Link>
      </div>
      <div className='nav-link'>
      <Dropdown overlay={menu} trigger={['click']} >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Racing <DownOutlined />
    </a>
  </Dropdown>
  <Dropdown overlay={ants} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Ants <DownOutlined />
    </a>
  </Dropdown>
  <Link to="/spinner">Tutorial</Link>
 
  <Button type='primary'>Login</Button>
  <Link to="/spin" >Game</Link>
      </div>
      
      </div>
      </div>
  )
}

export default Navbar;