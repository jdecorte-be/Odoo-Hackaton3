import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from "react-native";

const Tab = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     name: 'Odoo - Event',
     calories: 356,
     fat: 8,
   },
   {
     key: 2,
     name: 'Idk - Wtf',
     calories: 262,
     fat: 16,
   },
   {
     key: 3,
     name: 'This crazy event',
     calories: 159,
     fat: "6",
   },
   {
     key: 4,
     name: 'THB - Team building',
     calories: 305,
     fat: 3,
   },
  ]);

  const from = page * itemsPerPage;

  return (
    <DataTable style={styles.tab}>
      <DataTable.Header style={styles.tab}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>People</DataTable.Title>
        <DataTable.Title numeric>Ranking</DataTable.Title>
      </DataTable.Header>

      {items.map((item) => (
        <DataTable.Row key={item.key} style={styles.tab}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default Tab;



const styles = StyleSheet.create({
    tab: {
        color: 'white',
        backgroundColor: '#fff',
    }
});
  