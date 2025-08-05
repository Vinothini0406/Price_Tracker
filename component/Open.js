import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: 'Track Prices Instantly',
    subtitle: 'Real-time monitoring of your favorite products.',
    image: require('../assets/Opening_Page/open-1.jpg'),
  },
  {
    id: '2',
    title: 'Get Smart Alerts',
    subtitle: 'Receive notifications when prices drop.',
    image: require('../assets/Opening_Page/open-2.jpg'),
  },
  {
    id: '3',
    title: 'View Historical Trends',
    subtitle: 'Analyze past prices for smarter buying.',
    image: require('../assets/Opening_Page/open-3.jpg'),
  },
];

export default function Open({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const loadingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(loadingAnim, {
      toValue: width * 0.8,
      duration: 2500,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= DATA.length) nextIndex = 0;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, loading]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Text style={styles.splashTitle}>DealWhiz</Text>
        <View style={styles.loadingBarContainer}>
          <Animated.View style={[styles.loadingBar, { width: loadingAnim }]} />
        </View>
        <Text style={styles.loadingText}>Launching...</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#05052B', '#070739']}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03083B" />
      
      {/* 🟦 HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>DealWhiz</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <Ionicons name="person-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="heart" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🎞️ CAROUSEL */}
      <FlatList
        ref={flatListRef}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={renderItem}
      />

      {/* 🔘 PAGINATION */}
      <View style={styles.pagination}>
        {DATA.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });
          return <Animated.View key={i} style={[styles.dot, { width: dotWidth }]} />;
        })}
      </View>

      {/* 🚀 CTA BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  loadingBarContainer: {
    height: 5,
    width: width * 0.8,
    backgroundColor: '#333',
    borderRadius: 3,
    overflow: 'hidden',
  },
  loadingBar: {
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  loadingText: {
    color: '#aaa',
    marginTop: 20,
    fontSize: 14,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#03083B',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginHorizontal: 16,
  },

  itemContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '700',
    color: '#f1f2f6',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#dfe6e9',
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0984e3',
    marginHorizontal: 4,
  },

  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#0984e3',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
