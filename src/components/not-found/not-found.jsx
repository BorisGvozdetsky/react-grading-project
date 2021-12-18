import * as S from './not-found.styled.js';
import { AppRoute } from 'const.js';

const NotFound = () => {
  return (
    <>
      <S.NotFoundWrap>
        <S.NotFoundTitle>404 Not found</S.NotFoundTitle>
        <S.NotFoundText>
          <S.Link to={AppRoute.Home}>Back to main page</S.Link>
        </S.NotFoundText>
      </S.NotFoundWrap>
    </>
  );
}

export default NotFound;
