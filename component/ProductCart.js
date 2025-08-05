import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e88e5',
  },
});

export default ProductCard;
