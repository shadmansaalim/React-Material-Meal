import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState({});
    const history = useHistory();

    const { strMeal, strMealThumb, strInstructions, strYoutube } = meal;
    console.log(meal)
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
                    <Button sx={{ mr: 2 }} variant="contained" color="error">

                        <a target="_blank" href={strYoutube} style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'around' }}>Recpie<YouTubeIcon></YouTubeIcon></a>

                    </Button>
                    <Button onClick={handleAllMeals} variant="contained" color="primary">View All Meals</Button>
                </Box>

            </Card>
        </Container>
    );
};

export default MealDetails;