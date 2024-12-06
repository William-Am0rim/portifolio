import { Container } from "./index.js";

export function IconPerson({icon, href}){
  return(
    <Container>
      <a href={href} target="_blank">
      <div className="bg-icon">
        {icon}
      </div>
      </a>
    </Container>
  )
}