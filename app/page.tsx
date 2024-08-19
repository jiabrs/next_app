'use client';
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
//import { authOptions } from "./api/auth/[...nextauth]/route";
import jollybean from '@/public/images/jollybean.jpeg';
import { Metadata } from "next";
import dynamic from "next/dynamic";
import _ from 'lodash';

const HeavyComponent = dynamic(() => import('./components/HeavyComponent'),
{loading: ()=> <p>Loading...</p>})

export default async function Home() {
  // const [isVisible, setVisible] = useState (false);
  //const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <Image 
        //src="https://bit.ly/react-cover" 
        src={jollybean} 
        alt="jollybean"  
        fill 
        className="object-cover"
       // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        sizes="10vh 10vw"
       // quality={100}
        priority
        />   */}
      {/* <h1>hello {session && <span>{session.user!.name}</span>}</h1> */}
      {/* <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />} */}

      <button onClick={async () => {
        const  _= (await import('lodash')).default;
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'},
        ];
       const sorted = _.orderBy(users, ['name']);

       console.log(sorted, '33333')
      }}>Show</button>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  );
}

// export async function generateMetadata() : Promise<Metadata>{
//   const product = await fetch('');
//   return{
//     title: 'product.title',
//     description: '....',
//   }
// }