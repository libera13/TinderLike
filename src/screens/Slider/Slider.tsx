import users from '../../../assets/data/users';
import {Card} from '../../components';
import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './Slider.style';

const Slider: FC = () => {
  const {...rest} = users[0];

  return (
    <View style={styles.view}>
      <Card {...rest} />
    </View>
  );
};

export default Slider;
