import * as React from "react";
import {
  FormGroup, InputGroup, Label, HTMLSelect, Button, Toast, Toaster, Position, Intent, TextArea, Classes
} from "@blueprintjs/core"
import styles from "../styles/form.module.css"

// const errorToast = Toaster.create({
//   className: "recipe-toaster",
//   position: Position.TOP,
// })

const flex = {
  display: "flex",
  flexDirection: "row",
}


const Form = () => {
  const [name, setName] = React.useState('');
  const [subject, setSubject] = React.useState('General Question');
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');

  const options = [
    {label: "Business", value: "Business"},
    {label: "General Question", value: "General Question"}
  ];

  

  const handleClick = async () => {
    let success = true
    fetch('/api/contactForm',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        subject:subject, 
        message:message, 
        email:email
      })
    }).then(response => {
      if (response.status != 200){
        success = false
        console.log(success)
      }
    }).catch(e => console.log(e))
    setName('')
    setSubject('General Question')
    setMessage('')
    setEmail('')
  }

  return (
    <div className={styles.container}>
      <FormGroup className={styles.form_field}>
        <div >
          <Label style={{width: "50%"}}> Full Name
            <input style={{width:"100%"}}  className={Classes.INPUT} onChange={(e) => setName(e.target.value)} placeholder="Full name" required/>
          </Label>
          <Label style={{paddingLeft: "1vw", width:"50%"}}> Email
            <input className={Classes.INPUT} style={{width:"100%"}} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
          </Label>
        </div>
        
        <Label> Subject
          <HTMLSelect onChange={(e) => setSubject(e.target.value)} options={options} />
        </Label>
    
        <Label> Message
          <TextArea growVertically={true} fill={true} large={true} intent={Intent.PRIMARY} onChange={(e) => setMessage(e.target.value)} required/>
        </Label>
        <Button  intent="primary" role="submit" text="Submit" onClick={handleClick} />
      </FormGroup>
    </div>
  );

}

export default Form;
