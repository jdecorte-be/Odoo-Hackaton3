import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface Item {
  key: number;
  name: string;
  calories: number;
  fat: number;
}

const HomeTab = () => {
  const [page, setPage] = React.useState<number>(0);
  const itemsPerPageList = [2, 3, 4];
  const [itemsPerPage, onItemsPerPageChange] = React.useState(itemsPerPageList[0]);

  const items: Item[] = [
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    // ... other items ...
  ];

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.title}>Dessert</DataTable.Title>
          <DataTable.Title numeric style={styles.title}>Calories</DataTable.Title>
          <DataTable.Title numeric style={styles.title}>Fat</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
            <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
          </DataTable.Row>
        ))}

        {/* Pagination component can be added here if needed */}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Adjust padding as needed
    backgroundColor: '#fff', // Change background color if needed
  },
  title: {
    fontWeight: 'bold',
    // Add more styles for titles if needed
  },
  // You can add more styles for other components here
});

export default HomeTab;
