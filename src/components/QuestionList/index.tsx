import { ReactNode } from "react";

import { Questions } from "./styles";

type QuestionListProps = {
  children: ReactNode;
}

export function QuestionList({children}: QuestionListProps) {
  return(
    <Questions>
      {children}
    </Questions>
  )
}