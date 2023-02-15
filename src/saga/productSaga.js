import { switchUnstyledClasses } from '@mui/base';
import { call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { Increment } from '../action/counteraction';
import {SUC,Failed} from '../action/productaction'


const url = "https://fakestoreapi.com/products";

const fetchGetProducts = () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};



function* PrdouctInternal()
{
   // yield delay(3000);

   try
   {
  let d=   yield call(fetchGetProducts);
  yield put(SUC(d));

   }
   catch(r)
   {
    yield put(Failed(r));

   }
}

export function* watchProduct()
{
    yield takeLatest('REQUESTSTART',PrdouctInternal);
}