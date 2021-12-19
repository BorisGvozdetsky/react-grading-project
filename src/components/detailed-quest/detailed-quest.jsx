import { useState, useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { getQuestLevel } from 'utils.js';
import { useSelector, useDispatch } from 'react-redux';
import { getIsQuestError, getIsQuestLoading, getQuest } from 'store/quests-data/selectors';
import { useParams } from 'react-router-dom';
import NotFound from 'components/not-found/not-found';
import Spinner from 'components/spinner/spinner';
import { fetchQuest } from 'store/api-action';

const DetailedQuest = () => {
  const quest = useSelector(getQuest);
  const isQuestLoading = useSelector(getIsQuestLoading);
  const isQuestError = useSelector(getIsQuestError);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuest(id));
  },[dispatch, id]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  const renderQuest = () => {
    if (isQuestLoading) {
      return <Spinner />;
    }

    if (quest) {
      const {coverImg, title, duration, peopleCount, level, description} = quest;

      return (
        <MainLayout>
          <S.Main>
            <S.PageImage
              src={`../${coverImg}`}
              alt={`квест ${title}`}
              width="1366"
              height="768"
            />
            <S.PageContentWrapper>
              <S.PageHeading>
                <S.PageTitle>{title}</S.PageTitle>
                <S.PageSubtitle>приключения</S.PageSubtitle>
              </S.PageHeading>

              <S.PageDescription>
                <S.Features>
                  <S.FeaturesItem>
                    <IconClock width="20" height="20" />
                    <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPerson width="19" height="24" />
                    <S.FeatureTitle>
                      {`${peopleCount.join('-')} чел`}
                    </S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPuzzle width="24" height="24" />
                    <S.FeatureTitle>{getQuestLevel(level)}</S.FeatureTitle>
                  </S.FeaturesItem>
                </S.Features>

                <S.QuestDescription>{description}</S.QuestDescription>

                <S.QuestBookingBtn onClick={onBookingBtnClick}>
                  Забронировать
                </S.QuestBookingBtn>
              </S.PageDescription>
            </S.PageContentWrapper>

            {isBookingModalOpened && <BookingModal onCloseClick={onBookingBtnClick}/>}
          </S.Main>
        </MainLayout>
      );
    }
  };
  return (
    <div>
      {isQuestError ?
        <NotFound /> :
        <>
          {renderQuest()}
        </>
      }
    </div>
  );

};

export default DetailedQuest;
