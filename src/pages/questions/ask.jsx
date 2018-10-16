import React, { Component } from 'react';
import E from 'wangeditor';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class AskQuestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: ''
    }
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: '30px' }}>Ask a question</div>
        <Form layout="horizontal" style={{ marginTop: '20px' }}>
          <FormItem label="Title">
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem label="Body">
            <div ref="editorElem" style={{ textAlign: 'left' }}>
            </div>
          </FormItem>
          <FormItem label="Tags">
            <Input placeholder="input placeholder" />
          </FormItem>
        </Form>
        <Button type="primary" onClick={this.clickHandle.bind(this)}>提交</Button>
      </div>
    )
  }

  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new E(elem);
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }
    editor.create();
  }

  clickHandle() {
    alert(this.state.editorContent)
  }
}

export default AskQuestionsPage;