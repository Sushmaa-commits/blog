import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import { Alert, AlertTitle } from '@material-ui/lab';
import {Pagination} from 'react-laravel-paginex';
import BlogItem from "../../components/BlogItem";


const BlogTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
  `;
const BlogPaginationContainer = styled.div`
    margin-top: 25px;
`;  


function Blog(props){
    // console.log(props);
    const [blogs, setBlogs] = useState(null);
    const [blogsLoading, setBlogsLoading] = useState(true);
    const [blogsError, setBlogsError] = useState(false);
    
    useEffect(
        ()=>{
            axios.get('/api/blog/list')
            .then(function (response) {
                // console.log(response.data);
                setBlogs(response.data);
                setBlogsLoading(false);
            })
            .catch(function (error) {
                // handle error
                setBlogsError(true);
                setBlogsLoading(false);
            });
           
        }, []
    )

    console.log(blogs);

    const getData = (data) => {
        axios.get('/api/blog/list?page=' + data.page).then(response => {
             setBlogs(response.data);
             setBlogsLoading(false);
        })
        .catch(function (error) {
            // handle error
            setBlogsError(true);
            setBlogsLoading(false);
        });
     }
    return(
       <Container>
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
                        {blogs.data.map((data) =>(
                            <Grid item xs={12} md={4} sm={4} key={data.id}>
                                <BlogItem data={data} onClick={()=>props.history.push(`/blog/${data.slug}`)} />
                            </Grid>
                        ))}
                    </Grid>
                    
                    <BlogPaginationContainer>
                        <Pagination changePage={getData} data={blogs.meta} />
                    </BlogPaginationContainer>
                </>
            }
           
       </Container>
    )
}

export default Blog;