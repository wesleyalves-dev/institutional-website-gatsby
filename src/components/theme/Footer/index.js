import React from 'react'

import { Wrapper, Grid } from './styles'

import Brand from './Brand'
import Links from './Links'
import SocialMedia from './SocialMedia'
import Copyrights from './Copyrights'

export default function Footer() {
  return (
    <Wrapper>
      <Grid>
        <Brand />
        <Links />
        <SocialMedia />
      </Grid>
      <Copyrights />
    </Wrapper>
  )
}
