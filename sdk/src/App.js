import React from 'react';
import alloy from '@alloyidentity/web-sdk';
// import alloy from 'alloy-sdk-example';
import './App.css';

const alloyInitParams = {
  key: 'e11dfd4e-348e-49a5-8382-2ee76ff178d9', // Client specific key
 // entityToken: 'P-JRRfVpXpZxuDm0pVKI4o',
  evaluationData: {
    nameFirst: 'Thomas',
    nameLast: 'Nicholas',
    addressLine1: '991 Willoughby Avenue',
    addressCity: 'Brooklyn',
    addressState: 'NY',
    addressPostalCode: '11221',
    addressCountryCode: 'US',
    birthDate: '1988-08-03',
  },
  production: false,
  validationPreChecks: false,
  selfie: false,
  documents: ['license', 'passport'],
  // color: {
  //   primary: "#862633",
  //   secondary: "#CD7D2D"
  // }
};
alloy.init(alloyInitParams);

function App() {
  // Callback
  const callback = data => {
    console.log("callback");
    console.log(data);
    if (data.outcome && data.outcome === 'Approved') {
      alert ('You got an account! Yes!');
    } else if (data.outcome) {
      alert('You did not get an Account :(');
    } else {
      console.log('this was not an outcome callback');
    }
  };

  const onOpen = () => {
    console.log("open");
    alloy.open(callback);
  };

  const onClose = () => {
    console.log("close");
    alloy.close();
  };

  return (
    <>
      <div className="App">
        <div className="buttonContainer">
          <br />
          <br />
          <br />
          <h1>Submit An Identity Document to Complete Your Application</h1>
          <button onClick={onOpen}>SUBMIT DOCS</button>
        </div>
      </div>
    </>
  );
}

export default App;
