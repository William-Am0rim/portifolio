import { Container } from './index.js';

export function Button({ text, color, icon, pos, width, ...rest}) {
  return (
    <Container color={color} pos={pos} width={width} {...rest}>
      {icon}
      {text}
    </Container>
  );
}
