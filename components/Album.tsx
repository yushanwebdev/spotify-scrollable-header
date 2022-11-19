import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Album, MIN_HEADER_HEIGHT } from "./Model";
import Header from "./Header";
import Content from "./Content";
import Cover from "./Cover";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

interface AlbumProps {
  album: Album;
}

export default ({ album }: AlbumProps) => {
  const { artist } = album;
  const scrollOffset = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Cover {...{ scrollOffset, album }} />
      <Content {...{ scrollOffset, album }} />
      <Header {...{ scrollOffset, artist }} />
      <View
        style={{
          position: "absolute",
          top: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
          left: 0,
          right: 0,
        }}
      >
        <ShufflePlay />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
