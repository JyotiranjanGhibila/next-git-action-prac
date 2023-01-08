import Image from "next/image";
import Link from "next/link";
import React from "react";

const GitProfile = ({ data }) => {
  console.log("got it:- ", data);
  return (
    <div style={{ width: "30%", border: "1px solid red" }}>
      <img
        src={data.avatar_url}
        alt={data.name}
        style={{ borderRadius: "80px", width: "40%" }}
      ></img>
      <h2>{data.name}</h2>
      <p style={{ color: "gray" }}>{data.login}</p>
      <br />

      <p>{data.bio}</p>
      <button style={{ borderRadius: "10px", padding: "10px", width: "25%" }}>
        <Link href="https://drive.google.com/drive/u/0/folders/1-_Xm0mcWs9YT-gvhAY5J1GVjzpC4olst">
          Resume
        </Link>
      </button>
      <button style={{ borderRadius: "10px", padding: "10px", width: "25%" }}>
        <Link href="https://github.com/JyotiranjanGhibila">Follow</Link>
      </button>
    </div>
  );
};

export async function getServerSideProps() {
  const d = await fetch("https://api.github.com/users/JyotiranjanGhibila");
  const r = await d.json();
  console.log(r);
  return {
    props: {
      data: r,
    },
  };
}
export default GitProfile;
