import React from 'react';
import User from '../../components/User';

const authPage = (props) => (
  <div>
    <h1>Hello Auth - {props.appName}</h1>
    <User name='Max' age={20}/>
  </div>
)

authPage.getInitialProps = (context) => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App (Auth)' });
    }, 1000)
  });
  return promise
}

export default authPage;
