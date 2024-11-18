// SlideShow.js
import React, { useEffect, useRef, useState } from "react";
import { FlatList, ImageBackground, Animated, StyleSheet, View, Dimensions } from "react-native";

const slides = [
  { id: 1, image: require("../assets/image/Slide1.jpg") },
  { id: 2, image: require("../assets/image/Slide2.jpg") },
  { id: 3, image: require("../assets/image/Slide3.png") },
  { id: 4, image: require("../assets/image/Slide4.jpg") },
  { id: 5, image: require("../assets/image/Slide5.jpg") },
];

const SLIDE_WIDTH = 360;
const SLIDE_SPACING = 20;

const SlideShow = () => {
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % slides.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderSlide = ({ item, index }) => (
    <ImageBackground
      source={item.image}
      style={styles.slide}
      resizeMode="cover"
    >
      <View style={styles.pagination}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationCircle,
              {
                backgroundColor: i === index ? "#FF9500" : "#555555",
              },
            ]}
          />
        ))}
      </View>
    </ImageBackground>
  );

  return (
    <FlatList
      data={slides}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderSlide}
      ref={flatListRef}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={SLIDE_WIDTH + SLIDE_SPACING}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: SLIDE_WIDTH,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SLIDE_SPACING,
    overflow: "hidden", 
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  paginationCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#555555",
    marginHorizontal: 5,
  },
});

export default SlideShow;
