import {connect} from "react-redux";
import {ActionCreator} from '../../../store/action';

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity,
    offers: state.currentOffers,
    sortState: state.sortState,
    hoveredElement: state.hoveredElement,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUserChoice(item) {
      dispatch(ActionCreator.changeCity(item));
    },
    onSortChange(item) {
      dispatch(ActionCreator.changeSort(item));
    },
    onOfferHover(id) {
      dispatch(ActionCreator.hoverElement(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
