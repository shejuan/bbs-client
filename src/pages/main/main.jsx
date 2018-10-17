import React from 'react'
import AskQuestionsPage from '@/pages/questions/ask'
import EditPage from '@/pages/edit/edit'
import ReplyPage from '@/pages/reply/reply'
import Home from '@/pages/home/home'
import Header from '@/pages/main/header'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Route, Link, Switch } from 'react-router-dom'
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
      <div>
        <Layout style={{ height: '100%' }}>
          <Header />
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
            <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 'initial'
                }}
              >
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/edit" component={EditPage} />
                  <Route path="/reply" component={ReplyPage} />
                  <Route path="/questions/ask" component={AskQuestionsPage} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Main
