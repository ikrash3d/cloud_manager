import { useGridCarousel } from '@/contexts';
import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Picker, PickerItemProps } from '@react-native-picker/picker';

interface ActionBarProps {
  itemCount: number;
}

const ActionBar = ({ itemCount }: ActionBarProps) => {
  const { itemPerPages, currentIndex, onNext, onPrevious, setItemPerPages, setCurrentIndex } = useGridCarousel();

  const numberOfPages = Math.ceil(itemCount / itemPerPages);
  const pagesArray = Array.from({ length: numberOfPages }, (_, i) => {
    return {
      key: i,
      pageNumber: i + 1,
    };
  });

  const pickerValues: PickerItemProps[] = [
    { testID: '0', label: '5', value: '5' },
    { testID: '1', label: '10', value: '10' },
    { testID: '2', label: '15', value: '15' },
    { testID: '3', label: '25', value: '25' },
    { testID: '4', label: '50', value: '50' },
    { testID: '5', label: '100', value: '100' },
  ];

  const selectedIndex = (index: number) => {
    return index === currentIndex ? styles.selectedIndex : {};
  };

  const onValueChange = (itemValue: string) => {
    setItemPerPages(Number(itemValue));
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <Pressable onPress={onPrevious}>
          <AntDesign name="caretleft" size={24} color="black" />
        </Pressable>
        {pagesArray.map((page) => (
          <Pressable key={page.key} onPress={() => setCurrentIndex(page.key)}>
            <Text key={page.key} style={selectedIndex(page.key)}>
              {page.pageNumber}
            </Text>
          </Pressable>
        ))}
        <Pressable onPress={onNext}>
          <AntDesign name="caretright" size={24} color="black" />
        </Pressable>
      </View>
      <Picker style={{ width: 100, height: 125 }} selectedValue={itemPerPages.toString()} onValueChange={onValueChange}>
        {pickerValues.map((item) => (
          <Picker.Item key={item.testID} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  actionBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  selectedIndex: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ActionBar;
