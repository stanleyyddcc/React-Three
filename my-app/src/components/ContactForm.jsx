import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubmitted: false, email: "", hasEmailError: false, content:'',hasContentError:false };
  }
  handleSubmit() {
    this.setState({ isSubmitted: true });
  }
  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue==='';
    this.setState({ email: inputValue, hasEmailError:isEmpty});

  }
  handleContentChange(event){
    const inputValue = event.target.value;
    const isEmpty = inputValue==='';
    this.setState({content:inputValue, hasContentError:isEmpty})
  }
  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className="contact-message-error">Please enter your email address</p>
      );
    }
    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText = (
        <p className="contact-message-error">Please enter your message</p>
      );
    }
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className="contact-submit-message">Sent Successfully</div>
      );
    } else {
      contactForm = (
        <form
          onSubmit={() => {
            this.handleSubmit();
          }}
        >
          <p>Email Address (required)</p>
          {/* Add the input tag */}
          <input
            value={this.state.email}
            onChange={(event) => {
              this.handleEmailChange(event);
            }}
          />
            {emailErrorText}
          <p>Message (required)</p>
          {/* Add the textarea tag */}
          <textarea value={this.state.content} onChange={(event)=>{this.handleContentChange(event)}}/>
          {contentErrorText}

          {/* Add the submit button */}
          <input type="submit" value="Send" />
        </form>
      );
    }

    return <div className="contact-form">{contactForm}</div>;
  }
}

export default ContactForm;
