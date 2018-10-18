import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon } from 'antd'
import TopNav from '@/components/topnav/topnav'
import MenuItems from '@/components/menu-items'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      navData: [
        {
          label: '首页',
          href: '/'
        },
        {
          label: '博客',
          href: '/'
        },
        {
          label: '资源',
          href: '/'
        },
        {
          label: '问答',
          href: '/',
          children: [
            {
              label: '技术问答',
              href: '/'
            },
            {
              label: '技术分享',
              href: '/'
            }
          ]
        }
      ],
      userOp: [
        {
          label: '我的私信',
          href: '/'
        },
        {
          label: '个人资料修改',
          href: '/user'
        }
      ]
    }
  }
  loginOut() {
    console.log('退出')
  }
  render() {
    return (
      <div className="blog-header">
        <Link to="/" className="header-logo flex-center">
          <img alt="logo" src={require('@/assets/images/logo-min.png')} />
        </Link>
        <TopNav data={this.state.navData} />
        <div className="header-user">
          盖伦，您好
          <div className="user-op">
            <Dropdown overlay={<MenuItems list={this.state.userOp} />}>
              <Link to="/">
                我的空间
                <Icon type="down" />
              </Link>
            </Dropdown>
          </div>
          |
          <span className="loginout" onClick={this.loginOut.bind(this)}>
            退出
          </span>
        </div>
      </div>
    )
  }
}

export default Header
