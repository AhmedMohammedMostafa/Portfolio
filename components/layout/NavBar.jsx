// NavBar.js
import React, { useState } from 'react';
import { Menu, Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="p-4 bg-dark-navBar">
      <Menu mode="horizontal" theme={darkMode ? 'dark' : 'light'}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
      <div className="flex items-center justify-end mt-2">
        <span className="mr-2 text-white">Dark Mode</span>
        <Switch
          checkedChildren={<BulbOutlined />}
          unCheckedChildren={<BulbFilled />}
          onChange={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default NavBar;
