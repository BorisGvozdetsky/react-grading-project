import { combineReducers } from 'redux';
import { appDataReducer } from './app-data/app-data';
import { questsDataReducer } from './quests-data/quests-data';

const NameSpace = {
  App: 'APP',
  Quests: 'QUESTS',
}

const rootReducer = combineReducers({
  [NameSpace.App]: appDataReducer,
  [NameSpace.Quests]: questsDataReducer,

});

export {NameSpace, rootReducer};
