import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  static getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Super App' });
      }, 1000)
    });
    return promise
  }

  render() {
    return (
      <div>
        <h1>Hello Main Page - {this.props.appName}</h1>
        <p>Go to <Link href='/auth'>Auth Page</Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    )
  }
};

export default IndexPage;
