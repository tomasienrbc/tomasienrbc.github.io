import alloy from 'alloy-identity-system';

const alloyInitParams = {
    key: '03d980-bv24-4ca1-99f2-90e3ee3f4e6b', // Client specific key
    entityToken: 'AbCDeFgCLYNtmujqr9ZPwQ0C9S',
    nameFirst: 'John',
    nameLast: 'Doe',
    evaluationData: {
      addressLine1: 'Address Line 1. C - left door',
      addressLine2: 'Secondary address. 2ºB',
      addressCity: 'City address',
      addressDate: 'TX',
      addressPostalCode: '+419550',
      addressCountryCode: 'VI',
      birthDate: '2020-03-03',
    },
};
alloy.init(alloyInitParams);

// Callback
const callback = data => {
    console.log(data);
};

const open = () => {
    alloy.open(callback);
};

const close = () => {
    alloy.close();
};
