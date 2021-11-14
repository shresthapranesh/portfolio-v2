import * as React from "react";
import {Form, Input, Button, Space} from 'antd';
import styles from "../styles/form.module.css"

// const errorToast = Toaster.create({
//   className: "recipe-toaster",
//   position: Position.TOP,
// })

const flex = {
  display: "flex",
  flexDirection: "row",
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}


const ContactForm:React.FC = () => {
  const [form] = Form.useForm()


  const handleSubmit = async (values:any) => {
    let success = true
    await fetch('/api/contactForm',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.fullname, 
        message:values.message, 
        email:values.email
      })
    }).then(response => response.text()).then(blob => console.log(blob)).catch(e => console.log(e))
  }
  const handleReset = () => {
    form.resetFields()
  }

  return (
    <div className={styles.container}>
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
    </div>
  );

}

export default ContactForm;
