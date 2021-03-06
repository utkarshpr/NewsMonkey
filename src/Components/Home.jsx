import React from "react";
import "../index.css";
import Bounce from "react-reveal/Bounce";
import Flash from "react-reveal/Flash";

function Home(props) {
  return (
    <>
      <div style={{ background: `${props.background}`, height: "90vh" }}>
        <h1 class="black-lives-matter">News Monkey </h1>
        <Bounce>
          <div className="container  " style={{ paddingTop: "2rem" }}>
            <code style={{ fontSize: "1.5rem" }}>
              It's amazing that the amount of news that happens in the world
              every day always just exactly fits the newspaper.
            </code>
          </div>
        </Bounce>
        <Flash>
          <div
            style={{
              fontSize: "1.4rem",
              padding: "2rem",
              color: `${props.color}`,
            }}
          >
            <strong>
              ππ―π’π’ ππ’π΄π° πππ¦π©πΆ ,{" "}
              <span style={{ textDecoration: "line-through" }}>
                π«π¬ π°π¦π€π«π²π­ π«π¬ ππ‘π‘π°
              </span>{" "}
              π
            </strong>
          </div>
        </Flash>
        <div
          style={{
            fontSize: "1.4rem",
            position: "fixed",

            bottom: "12%",
            right: "40%",

            color: `${props.color}`,
          }}
        >
          <div> πΈπππ ππππ π·πππ π</div>
        </div>
      </div>
    </>
  );
}

export default Home;
