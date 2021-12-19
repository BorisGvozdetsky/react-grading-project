import {QuestFilter, QuestLevel} from 'const.js';

const getQuestLevel = (level) => {
  switch(level) {
    case QuestLevel.Easy:
      return 'легкий';
    case QuestLevel.Medium:
      return 'средний';
    case QuestLevel.Hard:
      return 'сложный';
    default:
      return '';
  }
};
const getQuestFilter = (filter) => {
  switch(filter) {
    case QuestFilter.Horror.type:
      return 'Ужасы';
    case QuestFilter.Detective.type:
      return 'Детектив';
    case QuestFilter.Adventures.type:
      return 'Приключения';
    case QuestFilter.Mystic.type:
      return 'Мистика';
    case QuestFilter.Scifi.type:
      return 'Sci-fi';
    default:
      return '';
  }
};

export {getQuestLevel, getQuestFilter};
