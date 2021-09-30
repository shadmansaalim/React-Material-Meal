import React from 'react';
import { useHistory } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
const Meal = (props) => {
    console.log(props.meal)
    const history = useHistory()
    const { idMeal, strMeal, strMealThumb, strCategory } = props.meal;
    const category = 'Category : ' + strCategory;
    const handleMealClick = () => {
        const url = `/meal/${idMeal}`;
        history.push(url);
    }
    return (
        <ImageListItem key={strMealThumb}>
            <img
                src={`${strMealThumb}?w=248&fit=crop&auto=format`}
                srcSet={`${strMealThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={strMeal}
                loading="lazy"
            />
            <ImageListItemBar
                title={strMeal}
                subtitle={category}
                actionIcon={
                    <IconButton
                        onClick={handleMealClick}
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${strMeal}`}
                    >
                        <InfoIcon />
                    </IconButton>
                }
            />
        </ImageListItem>
    );
};

export default Meal;