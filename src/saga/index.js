import { all } from "redux-saga/effects";
import {watchIncrement} from './counterSaga'
import { watchProduct } from "./productSaga";

export function* rootSaga()
{

    yield all([watchIncrement(), watchProduct()])
}