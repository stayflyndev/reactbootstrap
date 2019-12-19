import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




const Hero = () => {
    return (
        <div>
             {/* Hero unit */}
             <Container maxWidth="sm" component="main" >
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Pick a Food Category
        </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Pick a delicious food category to begin placing an order. No deliver fee!
        </Typography>
            </Container>
            {/* End hero unit */}
        </div>
    );
}

export default Hero;
