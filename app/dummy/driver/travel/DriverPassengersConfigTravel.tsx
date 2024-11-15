import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface DriverPassengersConfigTravelProps {}

export const DriverPassengersConfigTravel: React.FC<
  DriverPassengersConfigTravelProps
> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <View style={styles.timeContainerH}>
          <Text style={styles.timeText}>9:41</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/5c06f19d1cfa10a494c595e6bb79ad5dee416250808902638f2f6f1e103b47fb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
            }}
            style={styles.signalIcon}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/38b96ad8e624c6a5dfb9a8720678d7f578852840c6b94fd15ccb389e34a301de?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
            }}
            style={styles.batteryIcon}
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            accessibilityLabel="Go back"
          >
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/cea0105f87933da9110b65b7b32ef2bd96649169492a7bded5945ba4daa05e6a?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
              }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Agregar Viaje</Text>
        </View>

        <View style={styles.tripDetails}>
          <View style={styles.detailRow}>
            <View style={styles.detailColumn}>
              <Text style={styles.label}>Salida</Text>
              <View style={styles.timeContainerChildA}>
                <Text style={styles.timeText}>7:20 AM</Text>
              </View>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.label}>Llegada</Text>
              <View style={styles.timeContainerChildB}>
                <Text style={styles.timeText}>8:00 AM</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.priceInput}>
          <Text style={styles.label}>Precio por Asiento</Text>
          <TextInput
            style={styles.input}
            placeholder="$ 0.00"
            placeholderTextColor="#CFCFCF"
            keyboardType="numeric"
            accessibilityLabel="Enter price per seat"
          />
        </View>

        <Text style={styles.seatAvailabilityText}>Asientos Disponibles</Text>

        <ImageBackground
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/a5546cf045e571c700ef893cb995e087474b167a8504aebd7d96bbf0f316cfd8?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
          }}
          style={styles.seatMap}
          resizeMode="cover"
        >
          {['C', 'B', 'A'].map((seat, index) => (
            <View
              key={seat}
              style={[styles.seat, index === 1 && styles.middleSeat]}
            >
              <Text style={styles.seatText}>{seat}</Text>
            </View>
          ))}
        </ImageBackground>

        <TouchableOpacity
          style={styles.filterButton}
          accessibilityLabel="Filter options"
        >
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/73562dd31978476b3e85667516aad1356fcf21cfed246ae4e93a5cdb1dc9c457?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
            }}
            style={styles.filterIcon}
          />
          <View style={styles.separator} />
          <Text style={styles.filterText}>Filtros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.confirmButton}
          accessibilityLabel="Confirm trip"
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F2422',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  timeContainer: {
    flex: 1,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signalIcon: {
    width: 20,
    height: 20,
  },
  batteryIcon: {
    width: 25,
    height: 12,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '500',
  },
  tripDetails: {
    width: '100%',
    marginTop: 18,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailColumn: {
    flex: 1,
  },
  label: {
    color: '#254A44',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
    marginBottom: 7,
  },
  timeContainerH: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    paddingVertical: 19,
    alignItems: 'center',
  },
  timeContainerChildA: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    paddingVertical: 19,
    alignItems: 'center',
  },
  timeContainerChildB: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    paddingVertical: 19,
    alignItems: 'center',
  },
  priceInput: {
    width: '100%',
    marginTop: 29,
  },
  input: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    height: 56,
    paddingHorizontal: 32,
    fontFamily: 'Inter, sans-serif',
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
  },
  seatAvailabilityText: {
    color: '#254A44',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 35,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  seatMap: {
    width: 185,
    aspectRatio: 1.99,
    marginTop: 14,
    paddingHorizontal: 37,
    paddingVertical: 9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  seat: {
    borderRadius: 7,
    backgroundColor: '#B0B0B0',
    width: 31,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSeat: {
    alignSelf: 'center',
  },
  seatText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
  },
  filterIcon: {
    width: 22,
    height: 22,
    borderRadius: 6,
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#223F3A',
    marginHorizontal: 10,
  },
  filterText: {
    color: '#223F3A',
    fontFamily: 'Inter, sans-serif',
    fontSize: 19,
    fontWeight: '700',
  },
  confirmButton: {
    alignSelf: 'stretch',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#2F7265',
    marginTop: 46,
    minHeight: 51,
    paddingHorizontal: 44,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
