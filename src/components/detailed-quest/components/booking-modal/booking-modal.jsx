import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendForm } from 'store/api-action';
import { getIsSendFormUploading } from 'store/app-data/selectors';

const BookingModal = ({onCloseClick}) => {
  const isSendFormUploading = useSelector(getIsSendFormUploading);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [legal, setLegal] = useState(false);
  const dispatch = useDispatch();

  const onNameChange = (evt) => {
    setName(evt.target.value);
  };

  const onPhoneChange = (evt) => {
    setPhone(evt.target.value);
  };

  const onPeopleCountChange = (evt) => {
    setPeopleCount(evt.target.value);
  };

  const onLegalChange = () => {
    setLegal(!legal);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setPeopleCount('');
    setLegal(false);
    onCloseClick();
  }

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendForm({name, phone, peopleCount: Number(peopleCount), isLegal: legal}, resetForm));
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => onCloseClick()}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={onFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              value={name}
              onChange={onNameChange}
              required
              disabled={isSendFormUploading}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              value={phone}
              onChange={onPhoneChange}
              required
              disabled={isSendFormUploading}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              value={peopleCount}
              onChange={onPeopleCountChange}
              required
              disabled={isSendFormUploading}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" disabled={isSendFormUploading}>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              value={legal}
              onchange={onLegalChange}
              required
              disabled={isSendFormUploading}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
