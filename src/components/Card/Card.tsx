import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';

import styles from './Card.style';

interface Props {
  bio: string;
  name: string;
  image: string;
}

const Card: FC<Props> = props => {
  const {bio, name, image} = props;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.imageContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
