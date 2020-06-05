import React, { Component } from "react";
import "../public/css/styles.css";

const AfterSubmit = () => (
  <div className="contactform" id="aftersubmit">
    <div className="title">
      <span className="topic3">
        Thanks for Submitting. <br /> I will get in touch.
      </span>
    </div>
  </div>
);

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "Advertise",
    message: "",
    submitted: false,
  };

  handleChange = (event) => {
    let tempvar = event.target.name;
    let tempvalue = event.target.value;
    this.setState({ [tempvar]: tempvalue });
  };

  handleSubmit = (event) => {
    this.setState({ submitted: true });
    const msg = {
      to: "pranesh.shrestha@ttu.edu",
      from: "portfolio@praneshshrestha.com",
      subject: this.state.subject,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      text: this.state.message,
    };
    // sgMail.send(msg).then(
    //   () => {},
    //   (error) => {
    //     console.log(error);
    //     if (error.response) {
    //       console.error(error.response.body);
    //     }
    //   }
    // );
    event.preventDefault();
  };

  render() {
    const isSubmitted = this.state.submitted;
    let elements;
    if (!isSubmitted) {
      elements = (
        <form onSubmit={this.handleSubmit} className="contactform">
          <h1 className="form-style-1"> Contact Form </h1>
          <ul className="form-style-1">
            <li>
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                className="field-divided"
                placeholder="First"
                onChange={this.handleChange}
                required
              />{" "}
              <input
                type="text"
                name="lastname"
                className="field-divided"
                placeholder="Last"
                onChange={this.handleChange}
                required
              />
            </li>
            <li>
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="field-long"
                onChange={this.handleChange}
                required
              />
            </li>
            <li>
              <label>Subject</label>
              <select
                name="subject"
                className="field-select"
                onChange={this.handleChange}
              >
                <option value="Advertise">Advertise</option>
                <option value="Partnership">Partnership</option>
                <option value="General Question">General</option>
              </select>
            </li>
            <li>
              <label>
                Your Message <span className="required">*</span>
              </label>
              <textarea
                name="message"
                id="field5"
                className="field-long field-textarea"
                onChange={this.handleChange}
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      );
    } else {
      elements = <AfterSubmit />;
    }

    return <div>{elements}</div>;
  }
}

export default Form;
