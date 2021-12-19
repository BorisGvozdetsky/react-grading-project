import { createReducer } from '@reduxjs/toolkit';
import { sendFormError, sendFormStart, sendFormSuccess, switchFilter, switchMenuType } from 'store/action';
import { MenuType, QuestFilter } from '../../const';

const initialState = {
  currentFilter: QuestFilter.All.name,
  currentMenuType: MenuType.Quests.name,
  isSendFormUploading: false,
};

const appDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchFilter, (state, action) => {
      state.currentFilter = action.payload;
    })
    .addCase(switchMenuType, (state, action) => {
      state.currentMenuType = action.payload;
    })
    .addCase(sendFormStart, (state) => {
      state.isSendFormUploading = true;
    })
    .addCase(sendFormSuccess, (state) => {
      state.isSendFormUploading = false;
    })
    .addCase(sendFormError, (state) => {
      state.isSendFormUploading = false;
    });

});

export {appDataReducer};
