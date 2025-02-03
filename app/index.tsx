import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface LinksProps {
  key: string;
  href: '/grid' | '/about' | '/user/[id]';
  text: string;
  params?: { id: string };
}

export default function Page() {
  const links: LinksProps[] = [
    {
      key: 'grid',
      href: '/grid',
      text: 'Grid',
    },
    {
      key: 'about',
      href: '/about',
      text: 'About',
    },
    {
      key: 'user',
      href: '/user/[id]',
      text: 'User',
      params: { id: '1' },
    },
  ];

  return (
    <View style={styles.container}>
      {links.map((link) => {
        return (
          <Pressable key={link.key} style={styles.buttonContainer}>
            <Link href={link.params ? { pathname: link.href, params: link.params } : link.href}>
              <Text style={styles.textColor}> {link.text}</Text>
            </Link>
          </Pressable>
        );
      })}
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
