import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.headerOne}>This is a header</Text>
      <Pressable style={styles.pressable}>
        <Link href="/">
          <Text style={styles.textColor}>Home</Text>
        </Link>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerOne: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
  },

  headerTwo: {
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
  },

  pressable: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    marginLeft: 10,
  },

  textColor: {
    color: 'white',
  },
});

export default Header;
