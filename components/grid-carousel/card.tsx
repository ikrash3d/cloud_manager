import { Image, StyleSheet, Text, View } from 'react-native';

import { GridCarousel } from '@/utils/interfaces/Grid';

const CarouselCard = ({ url, title }: GridCarousel) => {
  return (
    <View style={styles.card}>
      <Image source={url} style={{ width: 50, height: 50 }} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    minWidth: 100,
    minHeight: 100,
    height: 100,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },

  cardText: {
    marginTop: 5,
  },
});

export default CarouselCard;
