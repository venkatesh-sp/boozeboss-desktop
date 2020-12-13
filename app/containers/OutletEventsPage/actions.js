/*
 *
 * EventsPage actions
 *
 */
import status from 'utils/status';

import {
  ADD_EVENT_DRAFT,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
  GET_LOCATIONS_REQUEST,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  ADD_MENU_REQUEST,
  ADD_MENU_SUCCESS,
  ADD_MENU_ERROR,
} from './constants';

export function addOutletEventDraft() {
  return {
    type: ADD_EVENT_DRAFT,
  };
}

export function getEventsRequest() {
  return {
    type: GET_EVENTS_REQUEST,
  };
}

export function getEventsSuccess(events) {
  return {
    type: GET_EVENTS_SUCCESS,
    events,
  };
}

export function getEventsError(error) {
  return {
    type: GET_EVENTS_ERROR,
    error,
  };
}

export function addEventRequest(event) {
  return {
    type: ADD_EVENT_REQUEST,
    event,
  };
}

export function addEventSuccess(success) {
  status(success, 'success');
  return {
    type: ADD_EVENT_SUCCESS,
    success,
  };
}

export function addEventError(error) {
  status(error, 'error');
  return {
    type: ADD_EVENT_ERROR,
    error,
  };
}

export function getLocationsRequest() {
  return {
    type: GET_LOCATIONS_REQUEST,
  };
}

export function getLocationsSuccess(locations) {
  return {
    type: GET_LOCATIONS_SUCCESS,
    locations,
  };
}

export function getLocationsError(error) {
  return {
    type: GET_LOCATIONS_ERROR,
    error,
  };
}

export function addMenuRequest(eventId, menu) {
  return {
    type: ADD_MENU_REQUEST,
    eventId,
    menu,
  };
}

export function addMenuSuccess(menu) {
  status(menu, 'success');
  return {
    type: ADD_MENU_SUCCESS,
    menu,
  };
}

export function addMenuError(error) {
  status(error, 'error');
  return {
    type: ADD_MENU_ERROR,
    error,
  };
}
