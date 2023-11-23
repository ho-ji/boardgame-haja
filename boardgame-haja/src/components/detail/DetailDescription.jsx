import he from 'he'

import * as S from 'styles/detail/DetailDescriptionStyle'

const DetailDescription = ({description}) => {
  return (
    <>
      <S.Title>Description</S.Title>
      <S.Line />
      {description && <S.Content>{he.decode(description.toString())}</S.Content>}
    </>
  )
}

export default DetailDescription
