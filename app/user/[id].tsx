import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>User Page {id}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
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
