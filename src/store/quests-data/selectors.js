import { NameSpace } from '../root-reducer';

const getQuests = (state) => state[NameSpace.Quests].quests;
const getIsDataLoaded = (state) => state[NameSpace.Quests].isDataLoaded;
const getQuest = (state)=> state[NameSpace.Quests].quest;
const getIsQuestLoading = (state)=> state[NameSpace.Quests].isQuestLoading;
const getIsQuestError = (state)=> state[NameSpace.Quests].isQuestError;

export {getQuests, getIsDataLoaded, getQuest, getIsQuestLoading, getIsQuestError};
