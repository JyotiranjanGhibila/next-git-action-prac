import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import GitProfile from "./components/GitProfile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "70px",
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h3>Jyoti Ranjan</h3>
        <h3>Projects</h3>
        <h3>Education</h3>
      </div>
    </div>
  );
}
