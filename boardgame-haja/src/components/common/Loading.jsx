import styled from 'styled-components'

const Spinner = styled.span`
  position: relative;
  width: 100%;
  height: ${({$customheight}) => $customheight || 'calc(100vh - var(--header-height) - var(--footer-height))'};
  display: block;
  margin: 0 auto;
  @keyframes spinner {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: #000;
    animation: spinner 0.6s linear infinite;
  }
`

const Loading = ({customheight}) => {
  return (
    <Spinner $customheight={customheight}>
      <span className="a11y-hidden">Loading</span>
    </Spinner>
  )
}

export default Loading
