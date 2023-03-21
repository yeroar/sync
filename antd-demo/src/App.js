/* eslint-disable */

// change path to dark.less in App.less to switch to dark theme

import './App.less';
import '/Users/nikita__ye/sync/sync/antd-demo/src/tokens/less/default.less';
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
)
const App = () => (
  <Layout>
    <Header className="header">
      <div
        className="logo"
        style={{
          float: "left",
          width: "120px",
          height: "31px",
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.3)",
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: containerColor,    
          }}
        >
          <Space direction="vertical" size="large">
            <div>
              <Typography>
                <Title>This is a title</Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  interdum hendrerit ex vitae sodales.
                </Paragraph>
              </Typography>
            </div>
            <Space>
            <Button
      type="primary"
      style={{ backgroundColor: "var(--colorPrimaryBase)" }}
    >
      Primary Button
    </Button>
              <Button size="large">Default Button</Button>
              <Button type="dashed" size="large">
                Dashed Button
              </Button>
              <Button type="text" size="large">
                Text Button
              </Button>
              <Button type="link" size="large">
                Link Button
              </Button>
            </Space>
            <Space>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <Button type="text">Text Button</Button>
              <Button type="link">Link Button</Button>
            </Space>
            <Space>
              <Button type="primary" size="small">
                Primary Button
              </Button>
              <Button size="small">Default Button</Button>
              <Button type="dashed" size="small">
                Dashed Button
              </Button>
              <Button type="text" size="small">
                Text Button
              </Button>
              <Button type="link" size="small">
                Link Button
              </Button>
            </Space>
            <div>
              <Pagination defaultCurrent={1} total={50} />
            </div>
            <div>
              <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step
                  title="In Progress"
                  description="This is a description."
                />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </div>
            <div>
              <Space>
                <Checkbox>Checkbox</Checkbox>
                <Radio>Radio</Radio>
                <Switch defaultChecked />
                <Switch size="small" defaultChecked />
              </Space>
            </div>
            <Space size="large">
              <Button type="primary">Button</Button>
              <Tag>Tag 1</Tag>

            </Space>
            <div>
              <Segmented
                options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
              />
            </div>
            <Rate />
            <Space>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </Space>
            <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </Tabs.TabPane>
  </Tabs>
            <div>
              <Space direction="vertical">
                <Input
                  size="large"
                  placeholder="large size"
                  prefix={<UserOutlined />}
                />
                <Input placeholder="default size" prefix={<UserOutlined />} />
                <Input
                  size="small"
                  placeholder="small size"
                  prefix={<UserOutlined />}
                />
                <Input
                  addonBefore="http://"
                  addonAfter=".com"
                  defaultValue="mysite"
                />
                <Input
                  addonBefore={selectBefore}
                  addonAfter={selectAfter}
                  defaultValue="mysite"
                />
                <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
                <Input
                  addonBefore="http://"
                  suffix=".com"
                  defaultValue="mysite"
                />
                <Input status="error" placeholder="Error" />
                <Input status="warning" placeholder="Warning" />
                <Input
                  status="error"
                  prefix={<ClockCircleOutlined />}
                  placeholder="Error with prefix"
                />
                <Input
                  status="warning"
                  prefix={<ClockCircleOutlined />}
                  placeholder="Warning with prefix"
                />
              </Space>
            </div>
            <div>
              <Space direction="vertical">
                <Alert message="Success Tips" type="success" showIcon />
                <Alert message="Informational Notes" type="info" showIcon />
                <Alert message="Warning" type="warning" showIcon closable />
                <Alert message="Error" type="error" showIcon />
                <Alert
                  message="Success Tips"
                  description="Detailed description and advice about successful copywriting."
                  type="success"
                  showIcon
                />
                <Alert
                  message="Informational Notes"
                  description="Additional description and information about copywriting."
                  type="info"
                  showIcon
                />
                <Alert
                  message="Warning"
                  description="This is a warning notice about copywriting."
                  type="warning"
                  showIcon
                  closable
                />
                <Alert
                  message="Error"
                  description="This is an error message about copywriting."
                  type="error"
                  showIcon
                />
              </Space>
            </div>
            <div>
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </Space>
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

export default App;