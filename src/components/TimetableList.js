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

import {Tag} from '../components';

export class TimetableList extends Component {
  static propTypes = {
    rows: PropTypes.array
  };

  renderRightSide(rowObj) {
    var rightSide;

    switch (rowObj.length) {
      case 0:
        // No lesson
        rightSide = (
          <MaterialText style={styles.subjectText}>Нет урока</MaterialText>
        );
        break;
      case 1:
        // Single-group lesson
        rightSide = [
          (<MaterialText
            style={styles.subjectText}
            key="1"
          >
            {rowObj[0].name}
          </MaterialText>),
          rowObj[0].room == undefined ? null : (
            <Tag
              room={rowObj[0].room}
              key="2"
            />
          )
        ];
        break;
      default:
        // More than one group
        rightSide = [];
        for (var i = 0; i < rowObj.length; ++i) {
          rightSide.push(
            <View
              style={[styles.row, styles.innerRow, i == 0 && styles.firstRow]}
              key={i}
            >
              <MaterialText style={styles.subjectText}>{rowObj[i].name}</MaterialText>
              {rowObj[i].room == undefined ? null : (<Tag room={rowObj[i].room} />)}
            </View>
          );
        }
    }
    return rightSide;
  }

  renderRow({item: rowObj, index}) {
    var mainRowStyle = [styles.row];
    var rightSideStyle = [styles.lessonRowRight];
    if (index == 0) {
      mainRowStyle.push(styles.firstRow);
    }
    if (rowObj.length > 1) {
      mainRowStyle.push(styles.noVerticalPad);
    }
    else {
      rightSideStyle.push(styles.flexRow);
    }
    return (
      <View style={mainRowStyle}>
        <MaterialText style={styles.subjectText}>
          {`${index + 1}.`}
        </MaterialText>
        <View style={rightSideStyle}>
          {this.renderRightSide(rowObj)}
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.rows}
        renderItem={this.renderRow.bind(this)}
        keyExtractor={(item, index) => index}
      />
    )
  }
}

export default withMaterialStyles((materialTheme) => ({}))(TimetableList);

export const styles = StyleSheet.create({
  row: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#d0d0d0',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstRow: {
    borderTopWidth: 0
  },
  innerRow: {
    marginLeft: 3,
    paddingRight: 0
  },
  subjectText: {
    fontSize: 17,
    lineHeight: 24
  },
  lessonRowRight: {
    flex: 1,
    marginLeft: 5
  },
  noVerticalPad: {
    paddingVertical: 0
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
