import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import { Box } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Meal from '../Meal/Meal';
import { Container } from '@mui/material';



import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
const Restaurants = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    const handleSearch = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    return (


        <Container fixed>
            <SearchBar handleSearch={handleSearch}></SearchBar>
            <ImageList sx={{ width: '100%', height: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                <ImageListItem key="Subheader" cols={3}>
                </ImageListItem>
                {
                    meals?.map(meal => <Meal meal={meal}></Meal>)
                }
            </ImageList>
        </Container>


    );
};

export default Restaurants;