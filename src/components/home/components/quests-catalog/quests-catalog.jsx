import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { getQuestFilter, getQuestLevel } from 'utils.js';
import { QuestFilter } from 'const.js';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFilter } from 'store/app-data/selectors';
import { getIsDataLoaded, getQuests } from 'store/quests-data/selectors';
import { switchFilter } from 'store/action';
import Spinner from 'components/spinner/spinner';

const QuestsCatalog = () => {
  const currentFilter = useSelector(getCurrentFilter);
  const quests = useSelector(getQuests);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const questsByType = quests.filter((quest) => currentFilter === getQuestFilter(quest.type) || currentFilter === QuestFilter.All.name);
  const dispatch = useDispatch();

  const onFilterChange = (name) => {
    dispatch(switchFilter(name));
  };

  return (
    <>
      <S.Tabs>
        {Object.values(QuestFilter).map(({name, icon: Icon}) => {
          return (
            <S.TabItem key={name} onClick={() => onFilterChange(name)}>
              <S.TabBtn isActive={currentFilter===name}>
                <Icon/>
                <S.TabTitle>{name}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>)
          })}
      </S.Tabs>
      {!isDataLoaded ? <Spinner/> :

        <S.QuestsList>
          {questsByType.map(({id, title, peopleCount, level, previewImg}) => {
            return (
              <S.QuestItem key={id}>
                <S.QuestItemLink to={`/quest/${id}`}>
                  <S.Quest>
                    <S.QuestImage
                      src={previewImg}
                      width="344"
                      height="232"
                      alt={`квест ${title}`}
                    />
                    <S.QuestContent>
                      <S.QuestTitle>{title}</S.QuestTitle>

                      <S.QuestFeatures>
                        <S.QuestFeatureItem>
                          <IconPerson />
                          {`${peopleCount.join('-')} чел`}
                        </S.QuestFeatureItem>
                        <S.QuestFeatureItem>
                          <IconPuzzle />
                          {getQuestLevel(level)}
                        </S.QuestFeatureItem>
                      </S.QuestFeatures>
                    </S.QuestContent>
                  </S.Quest>
                </S.QuestItemLink>
              </S.QuestItem>)
          })}
        </S.QuestsList>
      }
    </>);
};

export default QuestsCatalog;
