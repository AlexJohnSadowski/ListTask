import React, { memo, useState } from 'react'
import { useSpring, a } from 'react-spring'
import { useMeasure } from '../hooks/useMeasure'
import { usePrevious } from '../hooks/usePrevious'

import { Frame, Title, Content, toggleIconProps } from '../styles/styles'
import * as Icons from '../assets/icons'

const Tree = memo(({ children, name, defaultOpen = false, uneven, indicator = true }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()

  const { height, opacity, transform } = useSpring({
    from: {
      height: 0,
      opacity: 0,
      transform: 'translate3d(20px,0,0)'
    },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    }
  })

  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

  const handleIconClick = () => {
    setOpen(!isOpen)
  }

  return (
    <Frame indicator={indicator}>
      <Icon style={{ ...toggleIconProps, opacity: children ? 1 : 0.3 }} onClick={handleIconClick} />
      <Title uneven={uneven}>{name}</Title>

      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <a.div style={{ transform }} {...bind}>
          {children}
        </a.div>
      </Content>
    </Frame>
  )
})

export default Tree
