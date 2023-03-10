import { all } from "redux-saga/effects";
import {watchIncrement} from './counterSaga'
import { watchProduct } from "./productSaga";
import { watchRegistration } from "./registrationSaga";

export function* rootSaga()
{

    yield all([watchIncrement(), watchProduct(),watchRegistration()])
}