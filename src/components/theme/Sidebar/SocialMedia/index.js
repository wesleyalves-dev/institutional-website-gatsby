import React from 'react'

import { Wrapper, List } from './styles'

import links from './content'
import Icons from './Icons'

export default function SocialMedia() {
  return (
    <Wrapper>
      <div>
        <List>
          {links.map(({ label, name, url }) => {
            const Icon = Icons[label]

            return (
              <li key={label}>
                <a
                  href={url}
                  title={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </li>
            )
          })}
        </List>
      </div>
    </Wrapper>
  )
}
