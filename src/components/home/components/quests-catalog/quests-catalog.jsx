import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import {quests} from 'mocks/mocks.js';
import { getQuestLevel } from 'utils.js';
import { QuestFilter } from 'const.js';

const QuestsCatalog = () => {
  return (
    <>
      <S.Tabs>
        {Object.values(QuestFilter).map(({name, icon: Icon}) => {
          return (
            <S.TabItem key={`${name}-1`}>
              <S.TabBtn isActive>
                <Icon/>
                <S.TabTitle>{name}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>)
          })}
      </S.Tabs>
      <S.QuestsList>
        {quests.map(({id, title, peopleCount, level, previewImg}) => {
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
    </>);
};

export default QuestsCatalog;
