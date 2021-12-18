import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const AppRoute = {
  Contacts: '/contacts',
  Home:  '/',
  Quest: '/quest/:id',
}

const QuestLevel = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
};

const QuestFilter = {
  All: {
    name: 'Все квесты',
    icon: IconAllQuests,
  },
  Horror: {
    name: 'Ужасы',
    icon: IconHorrors,
  },
  Mystic: {
    name: 'Мистика',
    icon: IconMystic,
  },
  Detective: {
    name: 'Детектив',
    icon: IconDetective,
  },
  Adventures: {
    name: 'Приключения',
    icon: IconAdventures,
  },
  Scifi: {
    name: 'Sci-fi',
    icon: IconScifi,
  }
};

export {QuestLevel, QuestFilter, AppRoute};
