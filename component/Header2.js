import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header2 = ({ onNotificationPress, onProfilePress, onFavoritesPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>DealWhiz</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconSpacing} onPress={onProfilePress}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onFavoritesPress}>
          <FontAwesome name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header2;
// wait loading ->