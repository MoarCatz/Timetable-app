'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {
  MaterialText,
  withMaterialStyles,
  Button
} from 'material-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BulletList} from '../components';

class LessonInfoBlock extends Component {
  static propTypes = {
    lesson: PropTypes.string,
    lessonNumber: PropTypes.number,
    teacherName: PropTypes.string,
    lessonTime: PropTypes.string,
    breaks: PropTypes.array
  };

  render() {
    return (
      <View>
        <MaterialText headline>
          {`${this.props.lessonNumber}. ${this.props.lesson}`}
        </MaterialText>
        <View style={styles.infoBlockSection}>
          <Icon name="schedule" style={styles.icon} />
          <View style={styles.sectionBody}>
            <MaterialText title>{this.props.lessonTime}</MaterialText>
            <MaterialText body1>Перемены:</MaterialText>
            <BulletList
              rows={[
                `до — ${this.props.breaks[0] || 'нет'}`,
                `после — ${this.props.breaks[1] || 'нет'}`
              ]}
            />
          </View>
        </View>
        <View style={styles.infoBlockSection}>
          <Icon name="school" style={styles.icon} />
          <View style={styles.sectionBody}>
            <MaterialText title>{this.props.teacherName}</MaterialText>
            <Button text="ПОКАЗАТЬ РАСПИСАНИЕ"></Button>
          </View>
        </View>
      </View>
    );
  }
}

export default withMaterialStyles((materialTheme) => ({}))(LessonInfoBlock);

export const styles = StyleSheet.create({
  infoBlockSection: {
    flexDirection: 'row',
    marginVertical: 2
  },
  icon: {
    color: '#43A047',
    alignSelf: 'flex-start',
    marginRight: 10,
    fontSize: 30,
    flex: 0
  },
  sectionBody: {
    flex: 1
  }
})
