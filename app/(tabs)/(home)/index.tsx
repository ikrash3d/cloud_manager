import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function HomeScreen() {
  const id = 'bacon';
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href={{ pathname: '/details/[id]', params: { id: id } }} asChild>
        <Text>View Details {id}</Text>
      </Link>

      <Link href="/details/2" asChild>
        <Text>View Details 2</Text>
      </Link>
      <Link href="/settings" asChild>
        <Text>View Settings</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
