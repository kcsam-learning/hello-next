import React from 'react';
import Link from 'next/link';

const indexPage = () => (
  <div>
    <h1>Ooopps, something went wrong!</h1>
    <p><Link href='/'>Go back!</Link></p>
  </div>
);

export default indexPage;
