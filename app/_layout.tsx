import { Footer, Header } from '@/components';
import { GridCarouselProvider, MediaProvider } from '@/contexts';
import { Slot, Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <MediaProvider>
        <GridCarouselProvider>
          <Slot />
        </GridCarouselProvider>
      </MediaProvider>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
});
