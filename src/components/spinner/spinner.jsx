import Loader from 'react-loader-spinner';
import * as S from './spinner.styled';


const Spinner = () => {
  return (
    <S.SpinnerWrap>
      <Loader type='Rings' color='red' height={100} width={100}/>
    </S.SpinnerWrap>
  );
}

export default Spinner;
