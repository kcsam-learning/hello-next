import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Ooopps, something went wrong!</h1>
    <p>Go to <Link href='/'>Index Page</Link></p>
  </div>
);

export default errorPage;
