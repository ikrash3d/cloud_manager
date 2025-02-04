import { GridCarousel } from '@/components';
import ImagePicker from '@/components/image-picker';
import { useGridCarousel } from '@/contexts';
import { Link } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';

export default function Page() {
  const { cards } = useGridCarousel();

  return (
    <View style={styles.container}>
      <GridCarousel items={cards} />
      <ImagePicker />
      <Pressable style={styles.buttonContainer}>
        <Link href="/">
          <Text style={styles.textColor}>main page</Text>
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  buttonContainer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },

  textColor: {
    color: 'white',
  },
});
