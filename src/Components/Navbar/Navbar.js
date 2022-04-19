import React from 'react';
import "./Navbar.css";
import { Menu, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const Navbar = () => {
    const menu = (
        <Menu
          items={[
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  1st menu item
                </a>
              ),
            },
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  2nd menu item (disabled)
                </a>
              ),
              icon: <DownOutlined />,
              disabled: true,
            },
            {
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  3rd menu item (disabled)
                </a>
              ),
              disabled: true,
            },
            {
              danger: true,
              label: 'a danger item',
            },
          ]}
        />
      );
  return (
      <div className='navbar-div'>
      <div className='navbar-wrapper'>
      <div>
          <a href='#'>Navbar</a>
      </div>
      <div className='nav-link'>
      <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
  </Dropdown>
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
  </Dropdown>
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
  </Dropdown>
  <Button type='primary'>Login</Button>
      </div>
      
      </div>
      </div>
  )
}

export default Navbar;