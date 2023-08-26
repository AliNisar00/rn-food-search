import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={(newSearchTerm) => {setSearchTerm(newSearchTerm)}}
                onTermSubmit={() => searchApi(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
