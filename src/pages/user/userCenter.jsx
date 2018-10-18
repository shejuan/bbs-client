import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from 'antd';
import SiderContent from "./siderContent/index"

import UserMsg from "./userMsg"
import Collection from "./collection/index"
import Focus from "./focus/index"
import Question from "./question/index"


const { Sider, Content } = Layout;


class UserCenter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout style={{ height: '100%' }}>
            <Sider width={300} style={{ background: '#fff' }}>
              <SiderContent />
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
              <Route path="/user/question" component={Question} />
              <Route path="/user/focus" component={Focus} />
            </Content>
          </Layout>
        </div>
      </Router>
    )
  }

}
export default UserCenter