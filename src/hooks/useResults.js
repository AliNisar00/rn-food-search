import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
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
    // Instead, use the useEffect() Hook
    useEffect(() => {
        searchApi('Chinese');
    }, []);

    return [searchApi, results, errorMessage];
};