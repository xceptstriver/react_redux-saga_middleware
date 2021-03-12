import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {connect} from 'react-redux';
import fetchData from '../redux/actions';

export class Routes extends React.Component {
  componentDidMount() {
    this.props.fetchData(2);
  }

  render() {
    return <Text>{this.props.user}</Text>;
  }
}

const mapStateToProps=(state)=>{
  return{
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchData:(id)=>{
      dispatch(fetchData(id))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Routes);
