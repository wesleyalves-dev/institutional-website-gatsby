import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../styles/global'

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
