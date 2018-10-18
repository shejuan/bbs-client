import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider } from 'antd'
import TopicItem from '@/pages/topic-item/topic-item'
import './home.less'
import mockData from './mock'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Divider />
        <Main />
      </div>
    )
  }
}

function Header() {
  return (
    <div className="page__header">
      <span>Top Question</span>
      <Link to="/questions/ask">
        <Button type="primary">Ask questions</Button>
      </Link>
    </div>
  )
}
function Main() {
  const itemGroups = mockData.map(item => {
    return (
      <div key={item.id}>
        <TopicItem item={item} />
        <Divider />
      </div>
    )
  })
  return <div className="page__main">{itemGroups}</div>
}

// function TopicItem(props) {
//   /**
//    * 数量统计
//    */
//   function StatisticsItem(props) {
//     return (
//       <div className="topic-item__statistics-item">
//         <div>{props.value}</div>
//         <div>{props.title}</div>
//       </div>
//     )
//   }
//   function TopicMain() {
//     return (
//       <div className="topic-item__main">
//         <div>标题</div>
//         <div className="topic-item__subline">
//           <div>关键字</div>
//           <div>asked 14 secs ago 김진우 1</div>
//         </div>
//       </div>
//     )
//   }
//   const item = props.item;
//   return (
//     <div className="topic-item">
//       <StatisticsItem title="answers" value={item.statistics.answers}></StatisticsItem>
//       <TopicMain></TopicMain>
//     </div>
//   )
// }

export default Home
