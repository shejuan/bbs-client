import React from 'react'
import AskQuestionsPage from '@/pages/questions/ask'
import EditPage from '@/pages/edit/edit'
import ReplyPage from '@/pages/reply/reply'
import Home from '@/pages/home/modules/home'
import { Layout, Menu, Icon } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './main.less'

const { Content, Sider } = Layout
class Main extends React.Component {
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
          label: '我的回帖',
          href: '/reply',
          icon: 'form'
        },
        {
          label: '我要提问',
          href: '/questions/ask',
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
            {/* <Layout style={{ padding: '0 24px 24px', height: '100%' }}> */}
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 'initial'
              }}
            >
              {/* <Switch> */}
              <Route path="/" exact component={Home} />
              <Route path="/edit" component={EditPage} />
              <Route path="/reply" component={ReplyPage} />
              <Route path="/questions/ask" component={AskQuestionsPage} />
              {/* </Switch> */}
            </Content>
          </Layout>
          {/* </Layout> */}
        </div>
      </Router>
    )
  }
}

export default Main
