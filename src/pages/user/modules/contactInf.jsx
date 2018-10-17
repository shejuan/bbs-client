import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;


class ContactInf extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="联系电话"
          >
            {getFieldDecorator('tel', {
              rules: [ {
                required: true, message: '请输入你的联系电话', whitespace: true 
              }],
            })(
              <Input />
            )}
              <Checkbox onChange={this.onChange}>对外公开</Checkbox>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邮箱地址"
          >
            {getFieldDecorator('email', {
              rules: [ 
                {
                  type: 'email', message: '请输入有效的邮箱地址',
                },
                {
                required: true, message: '请输入你的邮箱地址', whitespace: true 
              }],
            })(
              <Input />
            )}
              <Checkbox onChange={this.onChange}>对外公开</Checkbox>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="QQ"
          >
            {getFieldDecorator('qq',{
              rules: [ {
                required: true, message: '请输入你的QQ', whitespace: true 
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
  
}

const XXX = Form.create()(ContactInf);

export default XXX