import './App.less';
const containerColor = "#fff"; //set to #141414 if theme is dark

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  Typography,
  Breadcrumb,
  Layout,
  Menu,
  Space,
  Button,
  Pagination,
  Steps,
  Checkbox,
  Input,
  Select,
  Segmented,
  Rate,
  Tabs,
  Tag,
  Alert,
  Collapse,
  Radio,
  Switch,
  Dropdown,
} from "antd";
import React, { useState } from "react";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);


const { Title, Paragraph, Text, Link } = Typography;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Step } = Steps;
const { Option } = Select;
const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const App = () => (
  <Layout>
    <Header className="header">
      <div
        className="logo"
        style={{
          float: 'left',
          width: '120px',
          height: '31px',
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
    </Layout>
  </Layout>
)

export default App;
