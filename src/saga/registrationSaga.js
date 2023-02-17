import { switchUnstyledClasses } from '@mui/base';
import axios from 'axios';
import { call, delay, put, takeEvery, takeLatest, takeLeading} from 'redux-saga/effects'
import { Increment } from '../action/counteraction';
import {SUC,Failed} from '../action/productaction'


const url = "https://real-pear-fly-kilt.cyclic.app/accounts/register";

const fetchGetProducts = (data) => {
  return axios.post(url,data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};



function* RegistrationInternal(action)
{
   // yield delay(3000);

   try
   {
  let d=   yield call(fetchGetProducts,action.payload);
  yield put(SUC(d));

   }
   catch(r)
   {
    yield put(Failed(r));

   }
}

export function* watchRegistration()
{
    yield takeLeading('START',RegistrationInternal);
}