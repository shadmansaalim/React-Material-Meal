import React from 'react';
import { useState, useEffect } from 'react';
import Meal from '../Meal/Meal';
import { Container } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Meals.css'
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
            .then(data => {
                if (data.meals !== null) {
                    setMeals(data.meals)
                }
            })
    }, [searchText])


    return (


        <Container fixed style={{ marginTop: '120px' }}>
            <Autocomplete

                sx={{ width: '80%', mx: 'auto', my: 5 }}
                style={{ backgroundColor: 'white', borderRadius: '8px' }}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={meals?.map((option) => option?.strMeal)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Looking for foods? "
                        InputProps={{
                            ...params?.InputProps,
                            type: 'search',
                            endAdornment: (
                                <IconButton sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            )
                        }}
                        onChange={handleSearch}

                    />
                )}

            />
            <ImageList className="meal-container" sx={{ width: '100%', height: '100%' }}>
                {
                    meals?.map(meal => <Meal meal={meal}></Meal>)
                }

            </ImageList>
        </Container >


    );
};

export default Restaurants;