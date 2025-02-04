import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';

const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const Page = () => {
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos', 'livePhotos'],
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
      videoQuality: 0,
    });

    console.log('result', result);

    if (!result.canceled && result.assets) {
      result.assets.forEach((asset) => {
        if (asset.type === 'image') {
          setImages((prev) => [...prev, asset.uri]);
        }
        if (asset.type === 'video') {
          setVideo(asset.uri);
        }
      });
    }
  };

  const player = useVideoPlayer(video, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.container}>
      <Text>Camera Page</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      <View style={styles.controlContainer}>
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={() => (isPlaying ? player.pause() : player.play())} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollViewContainer: {
    gap: 20,
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
  },

  video: {
    width: 350,
    height: 275,
    marginBottom: 10,
  },

  controlContainer: {
    padding: 10,
  },
});

export default Page;
