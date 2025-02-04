import { useMedia } from '@/contexts';
import * as ExpoImagePicker from 'expo-image-picker';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const ImagePicker = () => {
  const { setPictureUris, setIsLoading } = useMedia();

  const pickImage = async () => {
    const { status } = await ExpoImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos', 'livePhotos'],
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
      videoQuality: 0,
    });

    if (!result.canceled && result.assets) {
      setIsLoading(true);
      result.assets.forEach((asset) => {
        if (asset.type === 'image' || asset.type === 'livePhoto') {
          setPictureUris((prev: string[]) => [...prev, asset.uri]);
        }
      });
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImagePicker;
