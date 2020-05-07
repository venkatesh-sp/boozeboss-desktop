import { call, put, select, takeLatest, fork, all } from 'redux-saga/effects';

import request from 'utils/request';

import { GET_CLIENTS_REQUEST, INVITE_CLIENT_REQUEST, GET_ROLES_REQUEST, INVITE_COLLABORATOR_REQUEST, CREATE_VENUE_REQUEST, CREATE_VENUE_SUCCESS, DELETE_VENUE_REQUEST, DELETE_VENUE_SUCCESS, GET_LOCATIONS_REQUEST, CREATE_BRAND_REQUEST, CREATE_BRAND_SUCCESS, CREATE_WAREHOUSE_REQUEST, CREATE_WAREHOUSE_SUCCESS, ADD_LOCATION_REQUEST, ADD_LOCATION_SUCCESS, UPDATE_SLA_REQUEST, UPDATE_SLA_SUCCESS } from './constants';
import {
  getClientsSuccess,
  getClientsError,
  inviteClientSuccess,
  inviteClientError,
  getRolesSuccess,
  getRolesError,
  inviteCollaboratorSuccess,
  inviteCollaboratorError,
  createVenueSuccess,
  createVenueError,
  deleteVenueSuccess,
  deleteVenueError,
  getLocationsSuccess,
  getLocationsError,
  createBrandcSuccess,
  createBrandError,
  createWarehouseSuccess,
  createWarehouseError,
  addClientLocationSuccess,
  addClientLocationError,
  updateSlaSuccess,
  updateSlaError,
} from './actions';

function* getClientsSaga() {
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${
    process.env.API_PORT
  }/api/clients`;
  const options = {
    method: 'GET',
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(getClientsSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(getClientsError(jsonError));
  }
}

function* inviteClientSaga(params) {
  const { client } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${
    process.env.API_PORT
  }/api/clients/invite`;
  const options = {
    method: 'POST',
    body: JSON.stringify(client),
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(inviteClientSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(inviteClientError(jsonError));
  }
}

function* getRolesSaga() {
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/roles?scope=BRAND`;
  const options = {
    method: 'GET',
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(getRolesSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(getRolesError(jsonError));
  }
}

function* getLocationsSaga() {
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/locations`;
  const options = {
    method: 'GET',
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(getLocationsSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(getLocationsError(jsonError));
  }
}

function* inviteCollaboratorSaga(params) {
  const { collaborator } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${
    process.env.API_PORT
  }/api/clients/invite-collaborator`;
  const options = {
    method: 'POST',
    body: JSON.stringify(collaborator),
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(inviteCollaboratorSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(inviteCollaboratorError(jsonError));
  }
}

function* addClientLocationSaga(params) {
  const { client_id, location_id } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/clients/${client_id}/add-location`;
  const options = {
    method: 'POST',
    body: JSON.stringify({location_id}),
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(addClientLocationSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(addClientLocationError(jsonError));
  }
}

function* createVenueSaga(params) {
  const { venue } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/venues`;
  const options = {
    method: 'POST',
    body: JSON.stringify(venue),
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(createVenueSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(createVenueError(jsonError));
  }
}

function* createBrandSaga(params) {
  const { brand } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/brands`;
  const options = {
    method: 'POST',
    body: JSON.stringify(brand),
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(createBrandcSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(createBrandError(jsonError));
  }
}

function* createWarehouseSaga(params) {
  const { warehouse } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/warehouses`;
  const options = {
    method: 'POST',
    body: JSON.stringify(warehouse),
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(createWarehouseSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(createWarehouseError(jsonError));
  }
}

function* deleteVenueSaga(params) {
  const { venue_id } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/venues/${venue_id}`;
  const options = {
    method: 'DELETE',
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(deleteVenueSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(deleteVenueError(jsonError));
  }
}

function* updateSlaSaga(params) {
  const { client_id, sla } = params;
  const requestURL = `${process.env.API_SCHEMA}://${process.env.API_HOST}:${process.env.API_PORT}/api/clients/${client_id}/update-sla`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(sla)
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(updateSlaSuccess(response));
  } catch (error) {
    const jsonError = yield error.response ? error.response.json() : error;
    yield put(updateSlaError(jsonError));
  }
}

function* getClientsRequest() {
  yield takeLatest(GET_CLIENTS_REQUEST, getClientsSaga);
}

function* inviteClientRequest() {
  yield takeLatest(INVITE_CLIENT_REQUEST, inviteClientSaga);
}

function* inviteCollaboratorRequest() {
  yield takeLatest(INVITE_COLLABORATOR_REQUEST, inviteCollaboratorSaga);
}

function* getRolesRequest() {
  yield takeLatest(GET_ROLES_REQUEST, getRolesSaga);
}

function* getLocationsRequest() {
  yield takeLatest(GET_LOCATIONS_REQUEST, getLocationsSaga);
}

function* createVenueRequest() {
  yield takeLatest(CREATE_VENUE_REQUEST, createVenueSaga);
}

function* createBrandRequest() {
  yield takeLatest(CREATE_BRAND_REQUEST, createBrandSaga);
}

function* addClientLocationRequest() {
  yield takeLatest(ADD_LOCATION_REQUEST, addClientLocationSaga);
}

function* createWarehouseRequest() {
  yield takeLatest(CREATE_WAREHOUSE_REQUEST, createWarehouseSaga);
}

function* deleteVenueRequest() {
  yield takeLatest(DELETE_VENUE_REQUEST, deleteVenueSaga);
}

function* updateSlaRequest() {
  yield takeLatest(UPDATE_SLA_REQUEST, updateSlaSaga);
}

// Reactive saga
function* createVenueSuccessRequest() {
  yield takeLatest(CREATE_VENUE_SUCCESS, getClientsSaga);
}

function* createBrandSuccessRequest() {
  yield takeLatest(CREATE_BRAND_SUCCESS, getClientsSaga);
}

function* deleteVenueSuccessRequest() {
  yield takeLatest(DELETE_VENUE_SUCCESS, getClientsSaga);
}

function* createWarehouseSuccesRequest() {
  yield takeLatest(CREATE_WAREHOUSE_SUCCESS, getClientsSaga);
}

function* addClientLocationSuccessRequest() {
  yield takeLatest(ADD_LOCATION_SUCCESS, getClientsSaga);
}

function* updateSlaSuccessRequest() {
  yield takeLatest(UPDATE_SLA_SUCCESS, getClientsSaga);
}

export default function* rootSaga() {
  yield all([
    fork(getClientsRequest),
    fork(inviteClientRequest),
    fork(inviteCollaboratorRequest),
    fork(getRolesRequest),
    fork(getLocationsRequest),
    fork(createVenueRequest),
    fork(createBrandRequest),
    fork(createWarehouseRequest),
    fork(deleteVenueRequest),
    fork(addClientLocationRequest),
    fork(updateSlaRequest),
    // Reactive
    fork(createVenueSuccessRequest),
    fork(deleteVenueSuccessRequest),
    fork(createBrandSuccessRequest),
    fork(createWarehouseSuccesRequest),
    fork(addClientLocationSuccessRequest),
    fork(updateSlaSuccessRequest),
  ]);
}
