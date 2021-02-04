import { Link } from "@primer/components"
import React from "react"

export default function ExternalLink({ children, href }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}