import React from "react";
import styles from "./test.module.css";
export default function Home({data}) {
  
  return <>
    {data.map(post=><div key={post.id}>{post.title}</div>)}
  </>;
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:9000/posts").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
    revalidate:1
  };
}

// export async function getServerSideProps(context){
//   console.log({context})
//   const data = await fetch("http://localhost:9000/posts").then((res) =>
//     res.json()
//   );
//   return {
//     props:{
//       data
//     }
//   }
// }


// SSG - STATIC SITE GENERATION - COMPILATION
// SSR - SERVER SIDE RENDERING  - RUNTIME

// ISR - Incremental Static Regeneration
