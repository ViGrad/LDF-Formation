import React from "react"

export interface ITextRenderProps {
  text: string
}

export default ({
  text
}: ITextRenderProps) => {
  return <p>{text}</p>
}