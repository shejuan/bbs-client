import React from 'react'
import User from '@/pages/user/userCenter'
import Home from '@/pages/home/main'
import Header from '@/pages/main/header'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './main.less'

const { Content } = Layout
class Main extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Router>
        <div>
          <Layout style={{ height: '100%' }}>
            <Header />
            <Layout style={{ height: '100%' }}>
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
                  <Route path="/user" component={User} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default Main
