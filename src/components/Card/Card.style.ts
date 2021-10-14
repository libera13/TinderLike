import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '60%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  name: {fontSize: 30, color: 'white', fontWeight: 'bold'},
  bio: {fontSize: 18, color: 'white', lineHeight: 24},
  imageContent: {margin: 10},
});

export default styles;
