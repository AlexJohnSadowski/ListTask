import styled from 'styled-components'
import { animated } from 'react-spring'

const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: ${(props) => (props.indicator ? 'rgba(0, 0, 0, 0.4)' : 'transparent')};
    top: 1em;
    left: -1em;
  }
`

const Title = styled('span')`
  vertical-align: middle;
  font-size: 2vh;
  color: black;
  background-color: ${(props) => (props.uneven ? 'lightgrey' : 'white')};
`

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px solid rgba(0, 0, 0, 0.4);
  overflow: hidden;
  list-style: none;
`

const toggleIconProps = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle'
}

export { Frame, Content, toggleIconProps, Title }
