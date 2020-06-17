import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
  <div>
    <h1>Hello Main Page</h1>
    <p>Go to <Link href='/auth'>Auth Page</Link></p>
    <button onClick={() => Router.push('/auth')}>Go to Auth</button>
  </div>
);

export default indexPage;
