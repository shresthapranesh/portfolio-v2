import * as React from 'react';
import {Form, Input, Button, Space, message} from 'antd';
import {Stack} from './Stack/Stack'


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}


const ContactForm:React.FC = () => {
  const [form] = Form.useForm()

  const handleSubmit = (values:any)=> {
    let success = true
    fetch('/api/contactForm',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.fullname, 
        message:values.message, 
        email:values.email
      })
    }).then(response => response.text()).then(text => message.success(text)).catch(e => message.error(e))
    form.resetFields()
  }
  const handleReset = () => {
    form.resetFields()
  }

  return (
    <Stack alignItems="center" sx={{paddingTop:10,width:800}}>
      <Form
        form={form}
        initialValues={{remember:true}}
        onFinish={handleSubmit}
        autoComplete="off"
        validateMessages={validateMessages}
        style={{width:'90%'}}
        size="large"
      >
        <Form.Item
          label="Name"
          name="fullname"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: 'email',required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Message is required!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        
        <Form.Item
        >
          <Space>
          <Button type="primary" htmlType="submit" >Submit</Button>
          <Button  htmlType="button" onClick={handleReset}>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </Stack>
  );

}

export default ContactForm;
