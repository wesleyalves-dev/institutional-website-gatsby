import React, { useState } from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../styles/global'
import Navbar from '../theme/Navbar'
import Sidebar from '../theme/Sidebar'
import Footer from '../theme/Footer'

import { Wrapper } from './styles'

export default function Layout({ children }) {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <GlobalStyles />
      <Navbar handleSidebar={setSidebar} />
      <Sidebar show={sidebar} handleSidebar={setSidebar} />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
