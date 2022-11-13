import React from 'react'
import { RecaptchaVerifier } from "firebase/auth";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import './App.css'
import Document from './component/Document';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    message : ""
    }
  }

  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }

  configureCaptcha = () =>{
 
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("recaptcha verified")
      }
    }, auth);
  }

  onSignInSubmit = (e) =>{
    e.preventDefault();
    this.configureCaptcha();

    const phoneNumber ="+91" +  this.state.mobile;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;
    
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("otp has been sent")
 
        }).catch((error) => {
            console.log("SMS not sent")
        });
  }

  onSubmitOTP = e =>{
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      this.setState(prevState => {
        return { message: "User is Verified" };
        });
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log("Enter correct OTP");
      this.setState(prevState => {
        return { message: "Enter correct OTP" };
      });
});
  }

  render() {
    return (
      <div className='outerDiv'>
       <div className='innerDiv'>
       <h2>Enter Phone Number</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="submit">Send Otp</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Verify Otp</button>
        </form>
        <h4>{this.state.message}</h4>
        {/* <Document/> */}
       </div>
      </div>
    )
  }
}
export default App
