import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
// import SiderContent from "./modules/siderContent"

import UserMsg from "./userMsg"
import Collection from "./modules/collection"
import Focus from "./modules/focus"


const { Sider, Content } = Layout;


class UserCenter extends Component {
  constructor() {
    super()
    this.state = {
      navData: [
        {
          label: '个人中心',
          href: '/user',
          icon: 'edit'
        },
        {
          label: '我的收藏',
          href: '/user/collection',
          icon: 'form'
        },
        {
          label: '我的关注',
          href: '/user/focus',
          icon: 'file-unknown'
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Layout style={{ height: '100%' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              {/* <SiderContent /> */}
              <Menu defaultSelectedKeys={['1']} mode="inline">
                {this.state.navData.map((item, i) => {
                  return (
                    <Menu.Item key={i + 1}>
                      <Link to={item.href}>
                        <Icon type={item.icon} />
                        <span>{item.label}</span>
                      </Link>
                    </Menu.Item>
                  )
                })}
              </Menu>
            </Sider>
            <Content
              style={{
                background: '#fff',
                paddingLeft: 24,
                margin: 0,
                minHeight: 'initial'
              }}
            >
              <Route path="/user" exact component={UserMsg} />
              <Route path="/user/collection" component={Collection} />
              <Route path="/user/focus" component={Focus} />
            </Content>
          </Layout>
        </div>
      </Router>
    )
  }

}
export default UserCenter