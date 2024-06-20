'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Welcome to Our Store</h1>
      <p>Please choose an option:</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/products">
        <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            Products
          </p>
        </Link>
        <Link href="/admin">
        <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            Admin
          </p>
        </Link>
      </div>
    </div>
  );
}
