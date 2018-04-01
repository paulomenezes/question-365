import React from 'react';
import { View, Text } from 'react-native';

import QuestionHeader from '../components/QuestionHeader';

export default class Home extends React.Component {
  static navigationOptions = {
    header: <QuestionHeader />
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Text>Questions</Text>
      </View>
    );
  }
}
