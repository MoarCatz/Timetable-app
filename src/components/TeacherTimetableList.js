'use strict';
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {
  MaterialText,
  withMaterialStyles
} from 'material-native';

import {Tag} from '../components';
import {TimetableList, styles} from './TimetableList';

class TeacherTimetableList extends TimetableList {
  renderRow({item: rowObj, index}) {
    var rightSide;

    switch (Object.keys(rowObj).length) {
      case 0:
        rightSide = (
          <MaterialText style={styles.subjectText}>Нет урока</MaterialText>
        );
        break;
      default:
        rightSide = [
          (<MaterialText
            style={styles.subjectText}
            key="1"
          >
            {rowObj.name}
          </MaterialText>),
          rowObj.room ? (<Tag
            room={rowObj.room}
            class={rowObj.class}
            key="2"
          />) : null
        ];
        break;
    }

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
          {rightSide}
        </View>
      </View>
    );
  }
}

export default withMaterialStyles((materialTheme) => ({}))(TeacherTimetableList);
