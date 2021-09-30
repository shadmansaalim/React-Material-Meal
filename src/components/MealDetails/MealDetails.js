import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState({});
    const history = useHistory();

    const { strMeal, strMealThumb, strInstructions } = meal;

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    const handleAllMeals = () => {
        history.push('/meals')
    }


    return (
        <Container fixed>
            <Card sx={{ marginTop: '120px', width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={strMealThumb}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {strMeal}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {strInstructions}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <Button onClick={handleAllMeals} style={{ marginTop: '10px', marginBottom: '10px' }} variant="contained" color="primary">View All Meals</Button>
            </Card>
        </Container>
    );
};

export default MealDetails;