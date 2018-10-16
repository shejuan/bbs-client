import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/index.less';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AskQuestionsPage from './pages/questions/ask';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Home from './pages/home/home';

const { Header, Content, Sider } = Layout;
const logo = {
  width: '120px',
  height: '31px',
  background: 'rgba(255,255,255,.2)',
  margin: '16px 28px 16px 0',
  float: 'left'
}
ReactDOM.render(
  <Router>
    <div>
      <Layout style={{ height: '100%' }}>
        <Header className="header">
          <div style={logo} />
        </Header>
        <Layout style={{ height: '100%' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="home" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 'initial' }}>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/questions/ask" component={AskQuestionsPage}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
