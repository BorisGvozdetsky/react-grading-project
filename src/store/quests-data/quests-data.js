import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuest, loadQuestSuccess, loadQuestError } from 'store/action';

const initialState = {
  quests: [],
  isDataLoaded: false,
  quest: null,
  isQuestLoading: false,
  isQuestError: false,
};

const questsDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadQuest, (state) => {
      state.isQuestLoading = true;
      state.isQuestError = false;
    })
    .addCase(loadQuestSuccess, (state, action) => {
      state.quest = action.payload;
      state.isQuestLoading = false;
    })
    .addCase(loadQuestError, (state) => {
      state.isQuestLoading = false;
      state.isQuestError = true;
    })

});

export {questsDataReducer};
