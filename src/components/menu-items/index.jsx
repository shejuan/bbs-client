import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

class MenuItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log(props)
  }

  render() {
    return (
      <Menu>
        {this.props.list.map((item, i) => {
          if (item.href) {
            return (
              <Menu.Item key={`item${i}`}>
                <Link to={item.href}>{item.label}</Link>
              </Menu.Item>
            )
          } else {
            return (
              <Menu.Item key={`item${i}`}>
                <span>{item.label}</span>
              </Menu.Item>
            )
          }
        })}
      </Menu>
    )
  }
}

export default MenuItems
