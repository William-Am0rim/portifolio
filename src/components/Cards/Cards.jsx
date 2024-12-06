import { Container } from './index.js';

export function Cards({ img, title, description, date, icons }) {
  return (
    <Container>
      <div className="image-card">{img}</div>
      <div className="info-card">
        <span>{date}</span>
        <div className="icons-card">{icons}</div>
      </div>
      <div className="text-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
}
