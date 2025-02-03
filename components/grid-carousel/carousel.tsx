import { GridCarousel as GridCarouselInterface } from '@/utils/interfaces/Grid';
import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActionBar, CarouselCard } from '@/components';
import { useGridCarousel } from '@/contexts';

interface GridCarouselProps {
  items: GridCarouselInterface[];
}

const GridCarousel = ({ items }: GridCarouselProps) => {
  const { itemPerPages, currentIndex } = useGridCarousel();

  const startOfPage = currentIndex * itemPerPages;
  const endOfPage = startOfPage + itemPerPages;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.grid}>
        {items.slice(startOfPage, endOfPage).map((item) => (
          <CarouselCard key={item.key} url={item.url} title={item.title} />
        ))}
      </ScrollView>

      <ActionBar itemCount={items.length} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },

  grid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  card: {
    minWidth: 100,
    minHeight: 75,
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

export default GridCarousel;
