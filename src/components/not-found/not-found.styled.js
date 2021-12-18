import styled from 'styled-components';
import { Link as RouterLink } from 'components/common/common';

const NotFoundWrap = styled.div`
  padding-top: 50px;
`;

const NotFoundTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  color: white;
`;

const NotFoundText = styled.p`
  text-align: center;
`;

const Link = styled(RouterLink)`
  color: red;
`;

export {
  NotFoundWrap,
  NotFoundTitle,
  NotFoundText,
  Link,
};
