import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { AppRoute, MenuType } from 'const.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrentMenuType } from 'store/app-data/selectors';
import { switchMenuType } from 'store/action';

const Header = () => {
  const currentMenuType = useSelector(getCurrentMenuType);
  const dispatch = useDispatch();
  const onMenuTypeChange = (type) => {
    dispatch(switchMenuType(type));
  }
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink  to={AppRoute.Home}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            {Object.values(MenuType).map((type) => {
              const isCurrentType = currentMenuType === type.name;
              return (
                <S.LinkItem key={type.name}>
                  <S.Link $isActiveLink={isCurrentType} to={type.route} onClick={() => onMenuTypeChange(type.name)}>
                    {type.name}
                  </S.Link>
                </S.LinkItem>
              );
            })}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
