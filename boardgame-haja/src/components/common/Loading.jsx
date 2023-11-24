import * as S from 'styles/common/loadingStyle'

const Loading = ({customheight}) => {
  return (
    <S.Spinner $customheight={customheight}>
      <span className="a11y-hidden">Loading</span>
    </S.Spinner>
  )
}

export default Loading
