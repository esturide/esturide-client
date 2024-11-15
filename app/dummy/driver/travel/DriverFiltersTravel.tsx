import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface FilterOptionProps {
  label: string;
  isActive: boolean;
  onToggle: () => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  label,
  isActive,
  onToggle,
}) => (
  <View style={styles.filterOption}>
    <Text style={styles.filterLabel}>{label}</Text>
    <TouchableOpacity
      style={[styles.toggle, isActive && styles.toggleActive]}
      onPress={onToggle}
      accessibilityRole="switch"
      accessibilityState={{ checked: isActive }}
      accessibilityLabel={`Toggle ${label}`}
    >
      <View
        style={[
          styles.toggleIndicator,
          isActive && styles.toggleIndicatorActive,
        ]}
      />
    </TouchableOpacity>
  </View>
);

interface DriverFiltersTravelProps {}

const DriverFiltersTravel: React.FC<DriverFiltersTravelProps> = () => {
  const [backpackCount, setBackpackCount] = useState(4);
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    allowEating: false,
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: !prevFilters[key],
    }));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.icons}>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/5c06f19d1cfa10a494c595e6bb79ad5dee416250808902638f2f6f1e103b47fb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
              }}
              style={styles.signalIcon}
              accessibilityLabel="Signal strength indicator"
            />
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/38b96ad8e624c6a5dfb9a8720678d7f578852840c6b94fd15ccb389e34a301de?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
              }}
              style={styles.batteryIcon}
              accessibilityLabel="Battery level indicator"
            />
          </View>
        </View>
        <View style={styles.filterBar}>
          <TouchableOpacity
            style={styles.backButton}
            accessibilityLabel="Go back"
            accessibilityRole="button"
          >
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/cea0105f87933da9110b65b7b32ef2bd96649169492a7bded5945ba4daa05e6a?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
              }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.filterText}>Filtros</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.backpackSection}>
          <Text style={styles.sectionTitle}>Cantidad de Mochilas</Text>
          <View style={styles.backpackCounter}>
            <Text style={styles.counterText}>{backpackCount}</Text>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/600191ce865b25c638e2a8743827ff1e8ed0911f7e1c7e4560449527b4f17d4a?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
              }}
              style={styles.counterIcon}
              accessibilityLabel="Backpack count indicator"
            />
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Permitir usuarios:</Text>
          <View style={styles.filterOptions}>
            <FilterOption
              label="Hombres"
              isActive={filters.men}
              onToggle={() => toggleFilter('men')}
            />
            <FilterOption
              label="Mujeres"
              isActive={filters.women}
              onToggle={() => toggleFilter('women')}
            />
            <FilterOption
              label="Permitido comer"
              isActive={filters.allowEating}
              onToggle={() => toggleFilter('allowEating')}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
          accessibilityRole="button"
          accessibilityLabel="Confirm filters"
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerIndicator} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F2422',
  },
  contentContainer: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: '#0F2422',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signalIcon: {
    width: 164,
    aspectRatio: 5.46,
  },
  batteryIcon: {
    width: 77,
    aspectRatio: 5.92,
    marginTop: 19,
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
  },
  backButton: {
    padding: 14,
  },
  backIcon: {
    width: 20,
    aspectRatio: 1,
  },
  filterText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 41,
  },
  backpackSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#254A44',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  backpackCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 22,
  },
  counterText: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    color: '#000000',
  },
  counterIcon: {
    width: 14,
    aspectRatio: 2.33,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  filterSection: {
    marginTop: 24,
  },
  filterOptions: {
    marginTop: 23,
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterLabel: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    color: '#254A44',
  },
  toggle: {
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleActive: {
    backgroundColor: '#2F7265',
  },
  toggleIndicator: {
    width: 14,
    height: 14,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  toggleIndicatorActive: {
    backgroundColor: '#FFFFFF',
  },
  confirmButton: {
    alignSelf: 'center',
    backgroundColor: '#2F7265',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    marginTop: 118,
    minHeight: 51,
    width: '100%',
    maxWidth: 302,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 17,
  },
  footerIndicator: {
    width: 135,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
});

export default DriverFiltersTravel;
