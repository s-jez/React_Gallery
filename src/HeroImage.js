import { Background } from "react-imgix";
import "./App.css";

export const HeroImage = (props) => (
  <Background
    src={props.source}
    className="hero-image"
  >
    <h1>{props.header}</h1>
  </Background>
);
