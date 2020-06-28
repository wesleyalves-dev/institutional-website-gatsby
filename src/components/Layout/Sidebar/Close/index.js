import React from 'react'
import PropTypes from 'prop-types'
import { Close as CloseIcon } from 'styled-icons/evil'

import { CloseSidebarButton } from './styles'

export default function Close({ handleSidebar }) {
  return (
    <CloseSidebarButton onClick={() => handleSidebar(false)}>
      <CloseIcon color="var(--text-primary-color)" />
    </CloseSidebarButton>
  )
}

Close.propTypes = {
  handleSidebar: PropTypes.func.isRequired
}
