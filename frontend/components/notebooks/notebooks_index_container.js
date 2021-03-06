import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex));
