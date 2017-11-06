'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  MaterialText,
  withMaterialStyles
} from 'material-native';

class Tag extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    return (
      <View style={styles.tag}>
        <MaterialText style={styles.tagText}>{this.props.text}</MaterialText>
      </View>
    )
  }
}

export default withMaterialStyles((materialTheme) => ({}))(Tag);

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#43A047'
  },
  tagText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center'
  }
})
