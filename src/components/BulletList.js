'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import {
  MaterialText,
  withMaterialStyles
} from 'material-native';

class BulletList extends Component {
  static propTypes = {
    rows: PropTypes.array
  };

  renderRow({item}) {
    return (
      <View style={styles.row}>
        <MaterialText style={styles.bullet}>●</MaterialText>
        <MaterialText>{item}</MaterialText>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.rows}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index}
        style={styles.list}
      />
    )
  }
}

export default withMaterialStyles((materialTheme) => ({}))(BulletList);

const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
    marginVertical: 5
  },
  row: {
    flexDirection: 'row',
    marginVertical: 1
  },
  bullet: {
    alignSelf: 'flex-start',
    flex: 0,
    marginRight: 5
  }
})
