import { delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { Increment } from '../action/counteraction';


function* InternalIncrement()
{
   // yield delay(3000);
    yield put(Increment());
}

export function* watchIncrement()
{
    yield takeLatest('INCREMENTASYNC',InternalIncrement);
}