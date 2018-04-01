import React, { Component } from 'react';
import { View, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class QuestionHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.4,
          shadowRadius: 10
        }}
        colors={['#6EEDFF', '#508BFA']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <View style={{ padding: 25 }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            365 Questions
          </Text>
        </View>
        <View style={{ marginHorizontal: 15, marginBottom: 5, flexDirection: 'row' }}>
          <Text style={{ fontSize: 42, fontWeight: 'bold', color: '#FFF' }}>01</Text>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#CEE7FE' }}>Sunday</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#CEE7FE' }}>April, 2018</Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            marginHorizontal: 15
          }}
        />
        <Text
          style={{
            margin: 15,
            fontSize: 36,
            fontWeight: 'bold',
            color: '#FFF',
            textAlign: 'justify'
          }}
        >
          What’s your favorite holiday?
        </Text>
      </LinearGradient>
    );
  }
}
