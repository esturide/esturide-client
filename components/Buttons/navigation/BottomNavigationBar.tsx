import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface BottomNavigationBarProps {
  userType?: 'driver' | 'passenger';
  currentPage: 'home' | 'add' | 'messages' | 'profile';
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ userType = 'driver', currentPage }) => {
  const router = useRouter();
  const activeColor = userType === 'driver' ? '#00796B' : '#3B82F6';
  const inactiveColor = 'gray';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/home')} style={styles.iconContainer}>
        <Ionicons
          name="home-outline"
          size={24}
          color={currentPage === 'home' ? activeColor : inactiveColor}
        />
        <Text style={[styles.label, { color: currentPage === 'home' ? activeColor : inactiveColor }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/add')} style={styles.iconContainer}>
        <Ionicons
          name="add-circle-outline"
          size={24}
          color={currentPage === 'add' ? activeColor : inactiveColor}
        />
        <Text style={[styles.label, { color: currentPage === 'add' ? activeColor : inactiveColor }]}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/messages')} style={styles.iconContainer}>
        <Ionicons
          name="mail-outline"
          size={24}
          color={currentPage === 'messages' ? activeColor : inactiveColor}
        />
        <Text style={[styles.label, { color: currentPage === 'messages' ? activeColor : inactiveColor }]}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/profile')} style={styles.iconContainer}>
        <Ionicons
          name="person-outline"
          size={24}
          color={currentPage === 'profile' ? activeColor : inactiveColor}
        />
        <Text style={[styles.label, { color: currentPage === 'profile' ? activeColor : inactiveColor }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    marginTop: 4,
  },
});

export default BottomNavigationBar;
