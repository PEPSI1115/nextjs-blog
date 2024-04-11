import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Introduce myself</h1>
      <h2>Name : JU HYUNMIN</h2>
      <h3>Student ID : 2024075669</h3>

      <h2>Hobby : </h2>
      <h3>Football, Cooking, Programming</h3> 
      <h4>Freshman in the Department of Information Systems at Hanyang University</h4> 
      <img src="/abc.jpg" alt="whfdjqtkwls" width="20%" ></img>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}