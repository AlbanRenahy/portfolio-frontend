import { connect } from 'react-redux';

import Menu from '../components/Mainbloc/Menu';


const mapStateToProps = state => ({
  view: state.view,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);