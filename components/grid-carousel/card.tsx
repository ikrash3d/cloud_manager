import { Image, StyleSheet, Text, View } from 'react-native';

import { GridCarousel } from '@/utils/interfaces/Grid';

const CarouselCard = ({ url, title }: GridCarousel) => {
  return (
    <View style={styles.card}>
      <Image source={url} style={styles.image} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    minWidth: 150,
    minHeight: 150,
    height: 100,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },

  image: {
    width: 125,
    height: 125,
  },

  cardText: {
    marginTop: 5,
  },
});

export default CarouselCard;
