import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailchimpForm = () => {
  const url = "YOUR_MAILCHIMP_FORM_ACTION_URL"; // Replace with your URL

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div className="mailchimp-form">
          <CustomForm onValidated={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
          {status === "success" && <div style={{ color: "green" }}>Subscribed successfully!</div>}
        </div>
      )}
    />
  );
};

// A custom form component to capture the email input
const CustomForm = ({ onValidated }) => {
  let email;
  const submit = () => {
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });
    // You can add more fields (e.g., FNAME, LNAME) as needed
  };

  return (
    <div style={{width: "90%"}}>
      <button style={{width: "20%",minWidth: "100px"}}onClick={submit}>Become A Member</button>
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Your Email"
      />
    </div>
  );
};

export default MailchimpForm;
