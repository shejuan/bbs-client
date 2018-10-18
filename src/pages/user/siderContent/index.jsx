import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import { Layou, Menu, Icon } from 'antd';
import './siderContent.less'

import robot from "@/assets/images/robot.png"


class UserMsg extends Component {
  constructor() {
    super()
    this.state = {
      navData: [
        {
          label: '我的个人资料',
          href: '/user',
        },
        {
          label: '我的发帖',
          href: '/user/question',
        },
        {
          label: '我的收藏',
          href: '/user/collection',
        },
        {
          label: '关注',
          href: '/user/focus',
        }
      ]
    }
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <img src={robot} alt="" />
          <h1>Jane</h1>
        </div>
        <ul className="sider_url">
          {this.state.navData.map((item, i) => {
            return (
              <li key={i + 1}>
                <Link to={item.href}>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}
export default UserMsg