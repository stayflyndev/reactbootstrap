import React from 'react';
import FOODITEMS from './food.data'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
// import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


function FoodList() {
    const foods = FOODITEMS  
    return (

  <Grid container spacing={5} alignItems="flex-end">
          {foods.map(food => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={food.title} xs={12} sm={food.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={food.title}
                  subheader={food.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                
               
                />
                <CardContent>
                  <div >
                  <Typography variant="h6" color="textSecondary">
                      Starting at 
                    </Typography>
                    <Typography component="h2" variant="h3" color="textPrimary">
                        
                      ${food.price}
                    </Typography>
                   
                  </div>
                  <ul>
                    {food.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={food.buttonVariant} color="secondary">
                    {food.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        );
  }

  export default FoodList;