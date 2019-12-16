import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'red'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: 'tan'
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  }
}));

const food = [
  {
    title: 'Mexican',
    price: '12',
    description: ['Burritos', 'Tacos', 'Enchiladas', 'Tamales'],
    buttonText: 'Place an Order',
    buttonVariant: 'outlined',
  },
  {
    title: 'Jamaican',
    subheader: 'Most popular',
    price: '13',
    description: [
      'Oxtails',
      'Jerk Chicken',
      'Curry Goat',
      'Patties',
    ],
    buttonText: 'Place an order',
    buttonVariant: 'contained',
  },
  {
    title: 'Chinese',
    price: '13',
    description: [
      'Crab Meat Cheese Wontons',
      'Beef & Broccoli',
      'Lo Mein',
      'Sesame Chicken',
    ],
    buttonText: 'Place an order',
    buttonVariant: 'outlined',
  },
];


export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            TFAN -time for a nap
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
  
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pick a Food Category
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Pick a delicious food category to begin placing an order. No deliver fee!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {food.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                  <Typography variant="h6" color="textSecondary">
                      Starting at 
                    </Typography>
                    <Typography component="h2" variant="h3" color="textPrimary">
                        
                      ${tier.price}
                    </Typography>
                   
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
   
        <Box mt={5}>
          <Copyright />
        </Box>
    
      {/* End footer */}
    </React.Fragment>
  );
}