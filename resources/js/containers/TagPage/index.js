import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Pagination} from 'react-laravel-paginex';
import TagItem from '../../components/TagItem';

  const TagsTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
`;


function Tag(props) {
    console.log(props);
    const [tags, setTags] = useState(null);
    const [tagsLoading, setTagsLoading] = useState(true);
    const [tagsError, setTagsError] = useState(false);

    useEffect(
        ()=>{
            axios.get('/api/tag/list')
            .then(function (response) {
                setTags(response.data);
                setTagsLoading(false);
                // console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                setTagsError(true);
                setTagsLoading(false);
            });
           
        }, []
    )

    const getData = (data) => {
        axios.get('/api/tag/list?page=' + data.page).then(response => {
            setTags(response.data);
            setTagsLoading(false);
        })
        .catch(function (error) {
            // handle error
            setTagsError(true);
            setTagsLoading(false)
        });
     }

    return (
        <Container>
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
            <TagsTypography gutterBottom variant='h3' component='h3'>
             Tags
            </TagsTypography>
            <Grid container spacing={4} justify='space-between'>
                    {tags.data.map((data) =>(
                    <Grid item xs={12} sm={6} >
                        <TagItem data={data} onClick={()=>props.history.push(`/tag/${data.slug}`)}/>
                </Grid>
                ))}
            </Grid> 
             
            <Pagination changePage={getData} data={tags.meta}/>   
        </>
}

</Container>
    );
}

export default Tag;