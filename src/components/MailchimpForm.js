import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SaiyanKenny from "../img/Saiyan_Kenny.png"
import SaiyanKennyBlue from "../img/Saiyan_Kenny_Blue_Orange.png"
// import SaiyanKennyDark from "../img/Saiyan_Kenny_Dark.png"

const MailchimpForm = () => {
  const url = "https://jerycoandfriends.us7.list-manage.com/subscribe/post?u=2c3a3d45d5393d41290196b6c&amp;id=73e6ea2dff&amp;f_id=00e59be0f0"; // Replace with your URL

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
    <div className='column' style={{alignItems: "center", width: "100vw",padding: "25px", backgroundColor: '#78f726'}}>
       <div className='row'><img class="hover" src={SaiyanKennyBlue} style={{width: "150px"}} onClick={submit}/><img class="hover" src={SaiyanKenny} style={{width: "150px"}} onClick={submit}/></div>

      {/* <button className='submit-button' style={{height: "39px", minWidth: "300px"}} onClick={submit}>Become A Member</button> */}
      <div style={{padding: "15px"}}></div>
      <input style={{height: "35px",minWidth: "300px", textAlign: "center"}}
        ref={node => (email = node)}
        type="email"  
        placeholder="Enter Your Email and Pick A Kenny"
      />
      <div style={{padding: "10px"}}></div>
    </div>
  );
};

export default MailchimpForm;
