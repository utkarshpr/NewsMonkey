import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import styled from "styled-components";
import React, { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [text, setText] = useState("Enable");
  const [state, setstate] = useState({
    background: "white",
    color: "black",
  });
  console.log("original", state);
  const handleColor = () => {
    if (state.background === "black") {
      setText("Enable");
      setstate({
        background: "white",
        color: "black",
      });
    } else {
      setText("Disable");
      setstate({
        background: "black",
        color: "white",
      });
    }
    console.log(state);
  };

  return (
    <Container>
      <div className="App">
        <NavBar background={state.background} color={state.color} />
        <Dark style={{ background: state.background }}>
          <DarkItems
            style={{ background: state.background, color: state.color }}
          >
            <div class="form-check form-switch" onClick={handleColor}>
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                {text} Dark Mode
              </label>
            </div>
          </DarkItems>
        </Dark>
        <News
          background={state.background}
          color={state.color}
          url="https://newsapi.org/v2/top-headlines?country=in&apiKey=a6f30bf16cc241dda6f2810d1c019a02&page="
        />
      </div>
      <FooterBox>
        <Footer background={state.background} color={state.color} />
      </FooterBox>
    </Container>
  );
}

export default App;
const FooterBox = styled.div``;
const Container = styled.div`
  display: grid;

  width: 100%;
  height: 150%;
  margin: 0px;
`;
const Dark = styled.div`
  padding: 2px;
  display: flex;
  justify-content: flex-end;

  align-items: right;
`;
const DarkItems = styled.div``;
