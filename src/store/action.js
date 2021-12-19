import { createAction } from '@reduxjs/toolkit';
import { ActionType } from './types/types';

const switchFilter = createAction(
  ActionType.SwitchFilter,
  (name) => ({
    payload: name,
  }),
);
const switchMenuType = createAction(
  ActionType.SwitchMenuType,
  (type) => ({
    payload: type,
  }),
);

const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: quests,
  }),
);

const loadQuest = createAction(ActionType.LoadQuest);

const loadQuestSuccess = createAction(
  ActionType.LoadQuestSuccess,
  (quest) => ({
    payload: quest,
  }),
);

const loadQuestError = createAction(ActionType.LoadQuestError);

const sendFormStart = createAction(ActionType.SendFormStart);
const sendFormSuccess = createAction(ActionType.SendFormSuccess);
const sendFormError = createAction(ActionType.SendFormError);

export {switchFilter, loadQuests, loadQuest, loadQuestSuccess, loadQuestError, sendFormStart, sendFormSuccess, sendFormError, switchMenuType};
