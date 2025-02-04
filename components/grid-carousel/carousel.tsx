import { GridCarousel as GridCarouselInterface } from '@/utils/interfaces/Grid';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { ActionBar, CarouselCard } from '@/components';
import { useGridCarousel, useMedia } from '@/contexts';

interface GridCarouselProps {
  items: GridCarouselInterface[];
}

const GridCarousel = ({ items }: GridCarouselProps) => {
  const { itemPerPages, currentIndex } = useGridCarousel();
  const { isLoading } = useMedia();

  const startOfPage = currentIndex * itemPerPages;
  const endOfPage = startOfPage + itemPerPages;

  console.log('isLoading', isLoading);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.grid}>
          {items.slice(startOfPage, endOfPage).map((item) => (
            <CarouselCard key={item.key} url={item.url} title={item.title} />
          ))}
        </ScrollView>
      )}

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
});

export default GridCarousel;
