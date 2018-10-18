import React, { Component } from 'react'
import { Tabs } from 'antd';
import { BrowserRouter as Router} from "react-router-dom";
import BasicInf from "./modules/basicInf"
import ContactInt from "./modules/contactInf"
import Department from "./modules/department"
// import { renderRoutes } from 'react-router-config'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class UserMsg extends Component {
  render() {
    return (
      <Router>
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="基本资料" key="1">
            <BasicInf/>
          </TabPane>
          <TabPane tab="联系信息" key="2">
            <ContactInt/>
          </TabPane>
          <TabPane tab="IT职业技能" key="3">
            <Department/>
          </TabPane>
        </Tabs>
        </div>
      </Router>
    )
  }
  
}
export default UserMsg