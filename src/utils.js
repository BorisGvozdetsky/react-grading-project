import {QuestLevel} from 'const.js';

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

export {getQuestLevel};
