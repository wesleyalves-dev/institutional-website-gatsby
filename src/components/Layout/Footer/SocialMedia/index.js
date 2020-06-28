import React from 'react'

import { Wrapper, List } from './styles'

import links from './content'
import Icons from './Icons'

export default function SocialMedia() {
  return (
    <Wrapper>
      <span>Siga-nos:</span>
      <List>
        {links.map(({ label, name, url }) => {
          const Icon = Icons[label]

          return (
            <a
              key={label}
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          )
        })}
      </List>
    </Wrapper>
  )
}
