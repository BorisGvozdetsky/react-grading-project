import { NameSpace } from '../root-reducer';

const getCurrentFilter = (state) => state[NameSpace.App].currentFilter;

const getCurrentMenuType = (state) => state[NameSpace.App].currentMenuType;

const getIsSendFormUploading = (state) => state[NameSpace.App].isSendFormUploading;

export {getCurrentFilter, getIsSendFormUploading, getCurrentMenuType};
