import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    console.log('Search triggered')

    const searchApi = async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: term,
                    location: 'san jose',
                    limit: 50
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // BAD CODE!
    // Call searchApi when component is first rendered to
    // make an initial search request.
    // searchApi('Chinese')

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
