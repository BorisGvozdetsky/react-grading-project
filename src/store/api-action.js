import { toast } from 'react-toastify';
import { loadQuest, loadQuestError, loadQuests, loadQuestSuccess, sendFormError, sendFormStart, sendFormSuccess } from './action';
import { APIRoute, ToastMessage } from '../const';

const fetchQuests = () =>
  async (dispatch, _getState, api) => {
    try{
      const {data} = await api.get(APIRoute.Quests);
      dispatch(loadQuests(data));
    } catch {
      toast.error(ToastMessage.ServerFail);
    }
  };

const fetchQuest = (id) =>
  async (dispatch, _getState, api) => {
    dispatch(loadQuest());
    try {
      const {data} = await api.get(`${APIRoute.Quests}/${id}`);
      dispatch(loadQuestSuccess(data));
    } catch {
      dispatch(loadQuestError());
      toast.error(ToastMessage.ServerFail);
    }
  };

const sendForm = ({name, phone, peopleCount, isLegal}, resetForm) => (
    async (dispatch, _getState, api) => {
      dispatch(sendFormStart());
      try {
        await api.post(APIRoute.Orders, {name, phone, peopleCount, isLegal});
        dispatch(sendFormSuccess());
        resetForm();
      } catch {
         dispatch(sendFormError());
         toast.error(ToastMessage.SendFail)
      }
    }
  );

export {fetchQuests, fetchQuest, sendForm};
