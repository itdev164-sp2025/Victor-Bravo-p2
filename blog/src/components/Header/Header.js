import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1 } from "../Heading"
import {Section} from "../Section"


const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${({ theme }) => theme.variants.header.primary.color};
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Section width={11 / 12}>
      <StyledLink to="/">
        <H1>{siteTitle}</H1>
      </StyledLink>
    </Section>
  </StyledHeader>
)

export {Header}
