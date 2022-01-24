import { ReactNode } from 'react'

import { Container, Footer } from './styles'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children
}: QuestionProps) {
  return (
    <Container 
      isHighlighted={isHighlighted}
      isAnswered={isAnswered}
    >   
      <p>{content}</p>
      <Footer
        isHighlighted={isHighlighted}
        isAnswered={isAnswered}
      >
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </Footer>
    </Container>
  )
}