import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text style={styles.footer}>This is a footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
});

export default Footer;
