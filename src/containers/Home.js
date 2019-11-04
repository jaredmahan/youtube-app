import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as actions from "../actions/home";
import { connect } from "react-redux";
import { Home } from "../components/Home";

export class HomeContainer extends Component {
  render() {
    return (
      <Home
        {...this.props}
        orderChange={this.handleOrderChange}
        queryChange={this.handleQueryChange}
      />
    );
  }

  handleQueryChange = e => {
    const value = !!e && !!e.target ? e.target.value.trim() : null;
    this.props.actions.getYouTubeResults(value, this.props.order);
  };
  handleOrderChange = e => {
    const value = !!e && !!e.target ? e.target.value.trim() : null;
    this.props.actions.getYouTubeResults(this.props.query, value);
  };
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  order: PropTypes.string,
  query: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.home.loading,
    order: state.home.order,
    errorMessage: state.home.errorMessage,
    results: !!state.home.result ? state.home.result.items : null,
    query: state.home.query
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
