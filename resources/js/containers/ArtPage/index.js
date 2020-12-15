import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Pagination } from 'react-laravel-paginex';
import ArtItem from "../../components/ArtItem";
  
const ArtsTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
`;


function Art(props) {
    console.log(props);
    const [artworks, setArtworks] = useState(null);
    const [artworksLoading, setArtworksLoading] = useState(true);
    const [artworksError, setArtworksError] = useState(false);
    
    useEffect(
        ()=>{
            axios.get('/api/art/list')
            .then(function (response) {
                setArtworks(response.data);
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
    const getData = (data) => {
        axios.get('/api/art/list?page=' + data.page).then(response => {
             setArtworks(response.data);
             setArtworksLoading(false);
        })
        .catch(function (error) {
            // handle error
            setArtworksError(true);
            setArtworksLoading(false);
        });
     }
    return (
        <Container>
            {
                artworksLoading && <CircularProgress/>
             }
            {
                artworksError && 
                    <Alert severity="error">
                        <AlertTitle>Recent Artworks Error</AlertTitle>
                            Something bad happened— <strong>Please Check back later!</strong>
                    </Alert>
            }
                    {!artworksLoading && !artworksError && 
                    
             <>
            <ArtsTypography gutterBottom variant='h3' component='h3'>
                Recent Arts
            </ArtsTypography>
            <Grid container spacing={4} justify='space-between'>
                {artworks.data.map((data)=>(
                    <Grid item xs={6} sm={3}>
                        <ArtItem data={data} onClick={()=>props.history.push(`/art/${data.slug}`)}/>
                    </Grid>
                ))}
            </Grid>
                <Pagination changePage={getData} data={artworks.meta}/>
            </>

            }
           
                  
        </Container>
    );
}

export default Art;