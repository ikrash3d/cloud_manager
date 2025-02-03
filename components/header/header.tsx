import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.headerOne}>This is a header</Text>
      <Text style={styles.headerTwo}>Page name</Text>
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
});

export default Header;
