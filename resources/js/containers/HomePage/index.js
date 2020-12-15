import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Slider from "../Slider/Slider";
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import { Alert, AlertTitle } from '@material-ui/lab';
import BlogItem from '../../components/BlogItem';
import TagItem from '../../components/TagItem';
import ArtItem from '../../components/ArtItem';


const BlogTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
  `;

const ArtsTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
`;

const TagsTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
`;

function Home(props) {
    const { history } = props;
    
    const [blogs, setBlogs] = useState(null);
    const [blogsLoading, setBlogsLoading] = useState(true);
    const [blogsError, setBlogsError] = useState(false);

    const [artworks, setArtworks] = useState(null);
    const [artworksLoading, setArtworksLoading] = useState(true);
    const [artworksError, setArtworksError] = useState(false);

    const [tags, setTags] = useState(null);
    const [tagsLoading, setTagsLoading] = useState(true);
    const [tagsError, setTagsError] = useState(false);
    useEffect(
        ()=>{
            axios.get('/api/blog/recent')
            .then(function (response) {
                setBlogs(response.data.data);
                setBlogsLoading(false);
            })
            .catch(function (error) {
                // handle error
                setBlogsError(true);
                setBlogsLoading(false);
            });
           
        }, []
    )
    useEffect(
        ()=>{
            axios.get('/api/art/recent')
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
    useEffect(
        ()=>{
            axios.get('/api/tag/recent')
            .then(function (response) {
                setTags(response.data.data);
                setTagsLoading(false);
            })
            .catch(function (error) {
                // handle error
                setTagsError(true);
                setTagsLoading(false);
            });
           
        }, []
    ) 
   

    console.log(props);
    return (
        <>
        <Container>
            <Slider/>
            {
                blogsLoading && <CircularProgress/>
            }
            {
                blogsError && 
                <Alert severity="error">
                    <AlertTitle>Recent Blogs Error</AlertTitle>
                    Something bad happened— <strong>Please Check back later!</strong>
                </Alert>
            }
            {!blogsLoading && !blogsError && 
                    <>
                    <BlogTypography variant='h3' component='h3'>
                        Recent Blogs
                    </BlogTypography>
                    <Grid container spacing={4} justify='space-between'>
                        {blogs.map((blog) =>(
                            <Grid item xs={12} md={4} sm={4} key={blog.id} >
                                <BlogItem data={blog} onClick={()=>history.push(`/blog/${blog.slug}`)} />
                            </Grid>
                        ))}
                    </Grid>

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
                        {artworks.map((data)=>(
                            <Grid item xs={6} sm={3} key={data.id}>
                                <ArtItem data={data} onClick={()=>history.push(`/art/${data.slug}`)} />
                            </Grid>
                        ))}
                </Grid>
                </>
                }
                {
                    tagsLoading && <CircularProgress/>
                }
                    {
                        tagsError && 
                        <Alert severity="error">
                            <AlertTitle>Recent Artworks Error</AlertTitle>
                                Something bad happened— <strong>Please Check back later!</strong>
                            </Alert>
                    }
                        {!tagsLoading && !tagsError && 
                        
                <>
                    <TagsTypography gutterBottom variant='h3' component='h3'>
                        Recent Tags
                    </TagsTypography>
                        <Grid container spacing={4} justify='space-between'>
                            {tags.map((data) =>(
                            <Grid item xs={12} sm={6} key={data.id} >
                                 <TagItem data={data} onClick={()=>history.push(`/tag/${data.slug}`)} />
                        </Grid>
                        ))}
                    </Grid>    
                </>
                }
                
                </>
                        
            }             
        </Container>
    </>
    );
}

export default Home;




