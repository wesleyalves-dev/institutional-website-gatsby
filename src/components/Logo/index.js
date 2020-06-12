import styled from 'styled-components'
import { Globe } from 'styled-icons/octicons'

export default styled(Globe)`
  color: ${props => props.color || '#000000'};
`
