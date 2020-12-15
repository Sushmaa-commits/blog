import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TagFacesRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    gridroot: {
      flexGrow: 1,
    },
  }));

const TagsTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
`;


function SingleTag() {
    let { slug } = useParams();

    const classes = useStyles();

    const [tags, setTags] = useState(null);
    const [tagsLoading, setTagsLoading] = useState(true);
    const [tagsError, setTagsError] = useState(false);

    useEffect(
        ()=>{
            axios.get(`/api/tag/${slug}`)
            .then(function (response) {
                setTags(response.data);
                setTagsLoading(false);
                console.log(response.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                setTagsError(true);
                setTagsLoading(false);
            });
           
        }, []
    )
    console.log(tags);


    return (
        <Container maxWidth="md">
        <div className={classes.gridroot}>
              {
                    tagsLoading && <CircularProgress/>
                }
                    {
                        tagsError && 
                        <Alert severity="error">
                            <AlertTitle>Recent Tags Error</AlertTitle>
                                Something bad happened— <strong>Please Check back later!</strong>
                            </Alert>
                    }
                        {!tagsLoading && !tagsError && 
             <>
                 <TagsTypography variant='h3' component='h3'>
                    {tags.name}
                 </TagsTypography>
                
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <img src={tags.image} alt={tags.name} style={{height:500,width:850,objectFit:'cover'}}/>
                    </Grid>
                    <Grid>
                        <Grid item xs={12}>
                            <TagsTypography  variant="h4" gutterBottom>
                                 {tags.name}
                             </TagsTypography>
                        </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" color="textPrimary" component="p" dangerouslySetInnerHTML={{ __html:tags.description }}>
                            </Typography>
                        </Grid>
                </Grid>
             </>
        }
        </div>
        </Container>
    );
}

export default SingleTag;