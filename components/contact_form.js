import React from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom);

    // Store this in a Blob and prompt user to download it as txt file
    const file = new Blob([JSON.stringify(conFom)], { type: 'text/plain' });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "contact_form.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    // remove the element when done
    document.body.removeChild(element);

    setTimeout(() => {
        setFormStatus('Submitted')
        }, 1000);
    setTimeout(() => {
        setFormStatus('Send')
        }, 2000);
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm;