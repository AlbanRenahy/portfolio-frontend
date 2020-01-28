import { connect } from 'react-redux';

 import Menu from '../components/Menu';


 const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

 const mapDispatchToProps = {};

 export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu); 