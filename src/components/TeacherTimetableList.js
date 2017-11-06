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
  renderRightSide(rowObj) {
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
          rowObj.room == undefined ? null : (
            <Tag
              room={rowObj.room}
              class={rowObj.class}
              key="2"
            />
          )
        ];
    }
    return rightSide;
  }
}

export default withMaterialStyles((materialTheme) => ({}))(TeacherTimetableList);
