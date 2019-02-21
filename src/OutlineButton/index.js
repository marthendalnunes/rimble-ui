import React from 'react'

import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { tint, shade } from 'polished'

import Button from '../Button'

import defaultTheme from '../theme'

const OutlineButton = styled(Button).attrs({
  primarycolor: props => themeGet('colors.primary', '#000')(props)
})`
  & {
    background: white;
  }
  &:hover {
    color: ${props => tint(0.2, props.primarycolor)};
    border-color: ${props => tint(0.2, props.primarycolor)};
    background-color: #FFF;
  }
  &:active {
    color: ${props => shade(0.2, props.primarycolor)};
    border-color: ${props => shade(0.2, props.primarycolor)};
    background-color: ${props => tint(0.9, props.primarycolor)};
  }
`

OutlineButton.defaultProps = {
  theme: defaultTheme,
  color: 'primary',
  bg: 'white',
  fontWeight: 3,
  height: '48px',
  border: 1,
  borderColor: 'grey',
  px: 4,
  py: 0,
  borderRadius: 1,
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
