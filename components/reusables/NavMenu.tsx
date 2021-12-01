import React, { useState } from 'react';
import { Menu, Select } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, CaretDownFilled } from '@ant-design/icons';
import Link from 'next/link'

import styles from '../../styles/NavMenu.module.css'
import type { GetStaticProps, NextPage } from 'next';

const { SubMenu } = Menu;
const { Option } = Select;

const onChange = (value: any) => {
  console.log(`selected ${value}`);
}

const onBlur = () => {
  console.log('blur');
}

const onFocus = () => {
  console.log('focus');
}

const onSearch = (val: any) => {
  console.log('search:', val);
}

const NavMenu: NextPage = () => {
    return (<>
    <div className={styles.container}>
      <div>
        <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Search a model"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
          <Option value="jack">Audi</Option>
          <Option value="lucy">BMW</Option>
          <Option value="tom">Honda</Option>
          <Option value="tom">Hyundai</Option>
          <Option value="tom">Jaguar</Option>
          <Option value="tom">Kia</Option>
          <Option value="tom">Land Rover</Option>
          <Option value="tom">Lexus</Option>
          <Option value="tom">Mercedes-Benz</Option>
          <Option value="tom">Nissan</Option>
          <Option value="tom">Toyota</Option>
          <Option value="tom">Volkswagen</Option>
        </Select>
      </div>

      <Menu className={styles.menu} mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
        <Link href="/about">About Us</Link>
        </Menu.Item>
        <SubMenu key="CaretD" icon={<CaretDownFilled />} title="Cars">
          <Menu.ItemGroup title="Cars">
            <Menu.Item key="setting:1">Toyota</Menu.Item>
            <Menu.Item key="setting:2">Mercedes</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="contact">
          <Link href="/contact">
            Contact Us
          </Link>
        </Menu.Item>
      </Menu>
    </div>
    </>);
}

export default NavMenu;