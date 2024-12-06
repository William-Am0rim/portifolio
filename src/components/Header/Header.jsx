import {Container} from "./index.js"
import { RiMenuFill } from "react-icons/ri";

export function Header(){
  return(
    <Container>
    <h2>William Amorim</h2>
    <div className="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    </Container>
  )
}