import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const VideoPlayer = () => {
  const [video, setVideo] = useState<string | null>(videoSource);

  const player = useVideoPlayer(video, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.container}>
      <Text>Camera Page</Text>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      <View style={styles.controlContainer}>
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={() => (isPlaying ? player.pause() : player.play())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default VideoPlayer;
