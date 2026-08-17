import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

import { headingId } from "@/content/essay-article"

function headingComponent(Tag: "h2" | "h3" | "h4") {
  return function Heading({
    children,
  }: {
    children?: React.ReactNode
  }) {
    const text = String(children)
    const id = headingId(text)

    return <Tag id={id}>{children}</Tag>
  }
}

const components: Components = {
  h2: headingComponent("h2"),
  h3: headingComponent("h3"),
  h4: headingComponent("h4"),
  table({ children }) {
    return (
      <div className="typeset-table">
        <table>{children}</table>
      </div>
    )
  },
}

export function EssayMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {children}
    </ReactMarkdown>
  )
}
