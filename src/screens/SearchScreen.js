import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={(newSearchTerm) => {setSearchTerm(newSearchTerm)}}
                onTermSubmit={() => {console.log('submitted')}}
                />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
