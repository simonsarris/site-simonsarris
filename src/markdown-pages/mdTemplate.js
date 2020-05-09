import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
    <SEO title={frontmatter.title || frontmatter.silentTitle}
        description={frontmatter.description || frontmatter.title + " — simonsarris"} />
    <div className="blog-post-container">
      <div className="blog-post">
        <h2>{frontmatter.title}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <em style={{ fontSize: "80%" }}>{frontmatter.date}</em>
      </div>
    </div>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        silentTitle
        description
      }
    }
  }
  `