import React from 'react';
import "./Navbar.css";
import { Menu, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const Navbar = () => {
    const menu = (
      <div className='menu-div'>
        <p>Item One</p>
      </div>
      );
  return (
      <div className='navbar-div'>
      <div className='navbar-wrapper'>
      <div>
          <a href='#'>Navbar</a>
      </div>
      <div className='nav-link'>
      <Dropdown overlay={<div><p>hell there</p></div>} trigger={['click']} >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Racing <DownOutlined />
    </a>
  </Dropdown>
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Ants <DownOutlined />
    </a>
  </Dropdown>
  <Dropdown overlay={menu} trigger={['click']} >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Tutorial <DownOutlined />
    </a>
  </Dropdown>
  <Button type='primary'>Login</Button>
      </div>
      
      </div>
      </div>
  )
}

export default Navbar;