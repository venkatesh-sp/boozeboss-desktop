/**
 *
 * ClientContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectClients, makeSelectRoles, makeSelectError, makeSelectSuccess, makeSelectLocations } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { ClientsContainer } from './components';
import { addClientDraft, getClients, inviteClient, getRoles, getLocations, inviteCollaborator, dismiss, createVenue, deleteVenue, createBrand, createWarehouse, addClientLocation, updateSla } from './actions';
import { makeSelectScope, makeSelectRole } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
export class ClientContainer extends React.Component {
  componentDidMount = () => {
    const { getClients, getRoles, getLocations, scope } = this.props;
    getClients();
    getRoles();
    getLocations();
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Client Container</title>
          <meta name="description" content="Description of ClientContainer" />
        </Helmet>
        <ClientsContainer {...this.props} />
      </div>
    );
  }
}

ClientContainer.propTypes = {
  clients: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  roles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  locations: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getClients: PropTypes.func.isRequired,
  addClientDraft: PropTypes.func.isRequired,
  inviteClient: PropTypes.func.isRequired,
  inviteCollaborator: PropTypes.func.isRequired,
  getRoles: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  createVenue: PropTypes.func.isRequired,
  createBrand: PropTypes.func.isRequired,
  addClientLocation: PropTypes.func.isRequired,
  createWarehouse: PropTypes.func.isRequired,
  deleteVenue: PropTypes.func.isRequired,
  dismiss: PropTypes.func.isRequired,
  scope: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  clients: makeSelectClients(),
  roles: makeSelectRoles(),
  locations: makeSelectLocations(),
  scope: makeSelectScope(),
  role: makeSelectRole(),
  error: makeSelectError(),
  success: makeSelectSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    getClients: () => dispatch(getClients()),
    addClientDraft: () => dispatch(addClientDraft()),
    inviteClient: client => dispatch(inviteClient(client)),
    inviteCollaborator: collaborator => dispatch(inviteCollaborator(collaborator)),
    getRoles: () => dispatch(getRoles()),
    getLocations: () => dispatch(getLocations()),
    createVenue: (venue) => dispatch(createVenue(venue)),
    createBrand: (brand) => dispatch(createBrand(brand)),
    deleteVenue: (venue_id) => dispatch(deleteVenue(venue_id)),
    createWarehouse: (warehouse) => dispatch(createWarehouse(warehouse)), 
    addClientLocation: (client_id, location_id) => dispatch(addClientLocation(client_id, location_id)),
    updateSla: (client_id, sla) => dispatch(updateSla(client_id, sla)),
    dismiss: type => dispatch(dismiss(type))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'clients', reducer });
const withSaga = injectSaga({ key: 'clients', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientContainer);
