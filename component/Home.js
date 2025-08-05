import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header2 from './Header2';

const products = [
  {
    id: 1,
    title: 'Realme Narzo 60x',
    price: '₹11,999',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/h/r/-original-imagt4qptrkzwmxa.jpeg',
  },
  {
    id: 2,
    title: 'Boult Z40 Earbuds',
    price: '₹1,399',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/1/p/-original-imagz5yzztfpvdb5.jpeg',
  },
  {
    id: 3,
    title: 'ASUS VivoBook 16',
    price: '₹41,990',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/q/7/f/-original-imaguhzvphzjgzvx.jpeg',
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} />

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          placeholder="Search for products, brands and more"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>Top Picks for You</Text>

      <ScrollView contentContainerStyle={styles.cardList}>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8fa',
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 16,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 10,
    color: '#333',
  },
  cardList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    backgroundColor: '#f0f0f0',
  },
  cardDetails: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  cardPrice: {
    fontSize: 14,
    color: '#1e88e5',
    marginVertical: 5,
  },
  buyButton: {
    backgroundColor: '#1e88e5',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  buyText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Home;
