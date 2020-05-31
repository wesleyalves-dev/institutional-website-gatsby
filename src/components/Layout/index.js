import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../styles/global'
import Navbar from '../theme/Navbar'

import { Wrapper } from './styles'

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
