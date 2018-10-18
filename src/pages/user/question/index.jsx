import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Question extends Component {
  constructor() {
    super()
    this.state = {
      navData: [
        {
          label: '文章1',
          href: '/user',
        },
        {
          label: '文章2',
          href: '/user/question',
        },
        {
          label: '文章3',
          href: '/user/collection',
        },
        {
          label: '文章4',
          href: '/user/focus',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>我的发帖</h1>
        <ul className="Question_title">
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
export default Question