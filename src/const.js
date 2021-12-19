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
    type: '',
  },
  Horror: {
    name: 'Ужасы',
    icon: IconHorrors,
    type: 'horror',
  },
  Mystic: {
    name: 'Мистика',
    icon: IconMystic,
    type: 'mystic',
  },
  Detective: {
    name: 'Детектив',
    icon: IconDetective,
    type: 'detective',
  },
  Adventures: {
    name: 'Приключения',
    icon: IconAdventures,
    type: 'adventures',
  },
  Scifi: {
    name: 'Sci-fi',
    icon: IconScifi,
    type: 'sci-fi',
  }
};

const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

const ToastMessage = {
  ServerFail: 'Server is not responding',
  SendFail: 'Form was not sent, please try again',
};

const MenuType = {
  Quests: {
    name: 'Квесты',
    route: AppRoute.Home,
  },
  Beginners: {
    name: 'Новичкам',
    route: '#',
  },
  Reviews: {
    name: 'Отзывы',
    route: '#',
  },
  Offers: {
    name: 'Акции',
    route: '#',
  },
  Contacts: {
    name: 'Контакты',
    route: AppRoute.Contacts,
  },
};


export {QuestLevel, QuestFilter, AppRoute, APIRoute, ToastMessage, MenuType};
