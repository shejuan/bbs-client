import React, { Component } from 'react'
import { Form, Input, Radio, DatePicker, Cascader, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class BasicInf extends Component {
  state = {
    disabled: true,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
    // const { getFieldDecorator } = "111111";

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="昵称"
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请输入你的昵称', whitespace: true
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="性别"
          >
            {getFieldDecorator('sex', {})(
              <div>
                <Radio defaultChecked={false} disabled={this.state.disabled}>男</Radio>
                <Radio defaultChecked disabled={this.state.disabled}>女</Radio>
                <span>性别不可修改</span>
              </div>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label=" 出生日期"
          >
            {getFieldDecorator('birthday', {
              rules: [{
                type: 'object', required: true, message: '请选择你的出生日期', whitespace: true
              }],
            })(
              <DatePicker onChange={this.onChange} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label=" 居住地址"
          >
            {getFieldDecorator('address', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{
                type: 'array', required: true, message: '请选择你的居住地址', whitespace: true
              }],
            })(
              <Cascader options={residences} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label=" 个性签名(不超过100字)"
          >
            {getFieldDecorator('signature', {
            })(
              <TextArea placeholder=" 请输入个性签名" autosize={{ minRows: 2, maxRows: 6 }} />
            )}
          </FormItem>
          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    )
  }

}
const XXX = Form.create()(BasicInf);
export default XXX