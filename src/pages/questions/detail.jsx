import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import './detail.less'

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="question-detail-wrapper">
        <Header title="balabalabala" />
        <QuestionContent />
        <AnswersList />
      </div>
    )
  }
}

function Header(props) {
  return (
    <div className="question-header">
      <span>{props.title}</span>
      <Link to="/questions/ask">
        <Button type="primary">Ask questions</Button>
      </Link>
    </div>
  )
}

function QuestionContent(props) {
  return (
    <div className="question-content-wrapper">
      <Votecell />
      <div className="question-content">
        <div className="content">{props.contetn}</div>
        <div className="keywords-wrapper">
          <span />
        </div>
        <UserInfo />
      </div>
    </div>
  )
}

function AnswersList() {
  return (
    <div className="answers-list-wrapper">
      <div className="answer-header-wrapper">
        <h3 className="answer-header">
          <span>3</span> Answers
        </h3>
      </div>
      <div className="answers-list">
        <div className="answer-item">
          <Votecell />
          <div className="answer-content-wrapper">
            <div className="answer-content" />
            <div className="user-card-wrapper">
              <UserInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 评分点赞
function Votecell() {
  return (
    <div className="votecell-wrapper">
      <span className="btn-agree" />
      <span className="number-agree" />
      <span className="btn-disagree" />
      <span className="btn-favourite" />
      <span className="number-favourite" />
    </div>
  )
}

// 用户卡
function UserInfo() {
  return (
    <div className="user-card-wrapper">
      <p className="edit-time">edited Jul 8 '14 at 22:01</p>
      <div className="user-card">
        <p className="ask-time">asked Jul 8 '14 at 7:07</p>
        <div className="user-info">
          <div className="user-photo" />
          <div className="user-name">Kid</div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail
