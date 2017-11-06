'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Button,
  MaterialText,
  withMaterialStyles
} from 'material-native';
import CardView from 'react-native-cardview';

class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    actions: PropTypes.array,
    ...View.propTypes
  }

  renderButtons(actions) {
    var btns = [];
    for (var {title, onPress, style} of actions) {
      btns.push(
        <Button
          text={title.toUpperCase()}
          onPress={onPress}
          key={title}
          style={style}
        />
      );
    }
    return btns;
  }

  render() {
    return (
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        style={[this.props.style, styles.card]}
      >
        <MaterialText headline style={styles.cardTitle}>
          {this.props.title}
        </MaterialText>
        {this.props.children}
        {(this.props.actions == undefined ? null : (
          <View style={styles.buttonRow}>
            {this.renderButtons(this.props.actions)}
          </View>
        ))}
      </CardView>
    );
  }
}

export default withMaterialStyles((materialTheme) => ({}))(Card);

const styles = StyleSheet.create({
  card: {
    padding: 16
  },
  cardTitle: {
    color: '#2E7D32',
    marginBottom: 8,
    marginLeft: 3
  },
  buttonRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 5
  }
})
