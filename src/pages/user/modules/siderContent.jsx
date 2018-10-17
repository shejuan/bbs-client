import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layou, Menu, Icon } from 'antd';

import robot from "@/assets/robot.png"


class UserMsg extends Component {
  constructor() {
    super()
    this.state = {
      navData: [
        {
          label: 'home',
          href: '/',
          icon: 'home'
        },
        {
          label: '我的发帖',
          href: '/edit',
          icon: 'edit'
        },
        {
          label: '我的收藏',
          href: '/user/collection',
          icon: 'form'
        },
        {
          label: '关注',
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
        </div>
      </Router>
    )
  }

}
export default UserMsg