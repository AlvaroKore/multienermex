import React from "react";
import emailjs from "emailjs-com";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: "",
        subject: "",
        phone: "",
        email: "",
      },
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Name is not empty" : "";
        break;
      case "subject":
        errors.subject = value.length < 5 ? "Subject must be 5 characters" : "";
        break;
      case "phone":
        errors.phone = value.length < 5 ? "phone is not empty" : "";
        break;
      case "email":
        errors.email = value.length < 5 ? "Subject is not empty" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "please enter valid email";
        }

        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.subject.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }
    emailjs
      .sendForm(
        "gmail",
        "template_zo1q2mh",
        e.target,
        "user_vvQtVRIgqRETJC2JHOJz9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("form is valid");
        },
        (error) => {
          console.log(error.text);
          alert("form is invalid");
        }
      );
  };

  render() {
    return (
      <a
        target={"_blank"}
        href="https://api.whatsapp.com/send?phone=525546096735&text=mensaje prueba desde link de ppagina"
      >
        <button className="btn send_btn theme_btn">Mandanos un wats</button>;
      </a>
    );
  }
}

export default Form;
