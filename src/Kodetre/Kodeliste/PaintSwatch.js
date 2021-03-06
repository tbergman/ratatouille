import React from 'react'
import Checkboard from './Checkboard'

const PaintSwatch = ({ color, onClick, muiTheme }) => (
  <div
    onClick={e => {
      onClick(e)
    }}
    style={{
      right: '14px',
      height: '28px',
      width: '28px',
    }}
  >
    <Checkboard
      borderRadius="12%"
      color={color}
      style={{
        border: '1px solid hsla(0, 0%, 0%, 0.2)',
      }}
    />
  </div>
)

export default PaintSwatch
