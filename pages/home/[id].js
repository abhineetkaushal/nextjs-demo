export default function Post({data}){
  console.log({data})
  return <>
  {data.title}-
  {data.author}
  </>
}

export async function getServerSideProps(context){
  const query = context.query;
  const {id} = query;
  const data = await fetch(`http://localhost:9000/posts/${id}`).then((res) =>
    res.json()
  );
  return {
    props:{
      data
    }
  }
}