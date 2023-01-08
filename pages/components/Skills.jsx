import React from "react";

const Skills = () => {
  return (
    <div
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        width: "14%",
        backgroundColor: "",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>React</p>
      <p>TypeScript</p>
      <p>NextJS</p>

      <p>NodeJS</p>
      <p>MongoDB</p>
      <p>GIT</p>
    </div>
  );
};

export default Skills;
