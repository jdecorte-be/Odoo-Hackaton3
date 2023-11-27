import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      placeholderTextColor={'#fff'}
      style={{
        borderRadius: 15,
        width: '90%',
        backgroundColor: '#1D1D1D',
      }}
    />
  );
};

export default Search;