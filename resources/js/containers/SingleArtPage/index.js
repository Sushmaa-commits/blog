import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styled from "styled-components";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    gridroot: {
      flexGrow: 1,
    },
  }));

const ArtTypography = styled(Typography)`
margin-top: 55px;
margin-bottom: 35px;
font-size: 40px;
`;

function SingleArt() {
    let { slug } = useParams();

    const classes = useStyles();

    const [artworks, setArtworks] = useState(null);
    const [artworksLoading, setArtworksLoading] = useState(true);
    const [artworksError, setArtworksError] = useState(false);

    
    useEffect(
        ()=>{
            axios.get(`/api/art/${slug}`)
            .then(function (response) {
                setArtworks(response.data.data);
                setArtworksLoading(false);
            })
            .catch(function (error) {
                // handle error
                setArtworksError(true);
                setArtworksLoading(false);
            });
           
        }, []
    )  
    console.log(artworks);

    return (
        <Container maxWidth="md">
            <div className={classes.gridroot}>
            {/* {slug} */}
            {
                    artworksLoading && <CircularProgress/>
                }
                {
                    artworksError && 
                    <Alert severity="error">
                        <AlertTitle>Recent Blogs Error</AlertTitle>
                        Something bad happened— <strong>Please Check back later!</strong>
                    </Alert>
                }
                {!artworksLoading && !artworksError && 
                        <>
                        <ArtTypography variant='h3' component='h3'>
                            {artworks.title}
                        </ArtTypography>
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <img src={artworks.image} alt={artworks.title} style={{height:500,width:850,objectFit:'cover'}}/>
                        </Grid>
                        <Grid>
                            <Grid item xs={12}>
                                <ArtTypography  variant="h4" gutterBottom>
                                    {artworks.title}
                                </ArtTypography>
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" color="textPrimary" component="p" dangerouslySetInnerHTML={{ __html:artworks.description }}>
                            </Typography>
                        </Grid>
                    </Grid>
                </>
                    }
            </div>
        </Container>
    );
}

export default SingleArt;