import { takeEvery } from 'redux-saga/effects'
import { ACCOUNT_OPEN } from '../../actions/actionTypes';
import { openAccount } from '../requests/openAccount';

export function* mySaga() {
    yield takeEvery(ACCOUNT_OPEN, openAccount);
}
  