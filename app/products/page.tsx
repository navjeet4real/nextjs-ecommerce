"use client";

import { useQuery } from 'react-query';
import axios from 'axios';
import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('http://localhost:4000');

export default function Products() {
//   const { data, refetch } = useQuery('products', () =>
//     axios.get('http://localhost:4000/products').then(res => res.data)
//   );

//   useEffect(() => {
//     socket.on('product-updated', () => {
//       refetch();
//     });
//     return () => socket.off('product-updated');
//   }, [refetch]);

//   if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* {data.map(product => (
        <div key={product.id}>{product.name} - ${product.price}</div>
      ))} */}
      yess
    </div>
  );
}
