// Core
import React from "react";
import ReactDOM from "react-dom";

// Components
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

const data = [
  { content: "React", link: "https://ru.reactjs.org/" },
  { content: "Parcel", link: "https://parceljs.org/" },
  { content: "Bootstrap", link: "https://bootstrap-4.ru/" },
];

const data2 = [{ content: "inst" }, { content: "vk" }, { content: "facebook" }];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main data={data} />
        <Footer data={data2} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("body"));
