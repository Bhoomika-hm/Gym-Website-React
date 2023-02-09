import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("mzbqeezd");
  return (<div id="frm">
  if (state.succeeded) {
      <p className="heading-h1">Your message has been recieved. I will contact you shortly...</p>
  }
  else
  {
      <form onSubmit={handleSubmit}>
        <h1 className="heading-h1">DROP YOUR THOUGHTS</h1>

      <label htmlFor="text">
        Name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="text">
        Subject
      </label>
      <input
        id="Subject"
        type="text" 
        name="Subject"
      />
      <label htmlFor="Message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" className="btn" disabled={state.submitting}>
        Submit
      </button>
    </form>
}
  </div>
  );
}
export default Form