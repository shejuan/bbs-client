import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from '@/components/menu-items'
import { Dropdown, Icon } from 'antd'
import './topnav.less'

class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="topnav-container">
        <div className="topnav-content">
          {this.props.data.map((item, i) => {
            if (item.children && item.children.length !== 0) {
              return (
                <Dropdown
                  key={`nav${i}`}
                  overlay={<MenuItems list={item.children} />}
                >
                  <Link to={item.href}>
                    {item.label}
                    <Icon type="down" />
                  </Link>
                </Dropdown>
              )
            } else {
              return (
                <Link key={`nav${i}`} to={item.href}>
                  {item.label}
                </Link>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default TopNav
