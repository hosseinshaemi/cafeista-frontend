import React, { createContext, useState } from "react";
const AuthProvider = createContext({
  fullname: "",
  setFullname: () => {},
  email: "",
  setEmail: () => {},
  phonenumber: "",
  setPhonenumber: () => {},
  password: "",
  setPassword: () => {},
  verifyCode: "",
  setVerifyCode: () => {},
  cafename: "",
  setCafename: () => {},
  cafephonenumber: "",
  setCafephonenumber: () => {},
  address: "",
  setAddress: () => {},
  accountNumber: "",
  setAccountnumber: () => {},
});

export default AuthProvider;

