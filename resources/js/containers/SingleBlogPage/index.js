import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';


const useStyles = makeStyles((theme) => ({
    gridroot: {
      flexGrow: 1,
    },
    usernameContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      iconContainer: {
        display: 'flex',
        alignItems: 'center',
      },
  }));

  const BlogTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
  `;

  const ReadTimeTypography = styled(Typography)`
    margin-top: 10px;
    margin-bottom: 10px;
`;


function SingleBlog() {
    let { slug } = useParams();

    const classes = useStyles();
      
    const [blog, setBlog] = useState(null);
    const [blogsLoading, setBlogsLoading] = useState(true);
    const [blogsError, setBlogsError] = useState(false);


    useEffect(
        ()=>{
            axios.get(`/api/blog/${slug}`)
            .then(function (response) {
                setBlog(response.data.data[0]);
                setBlogsLoading(false);
            })
            .catch(function (error) {
                // handle error
                setBlogsError(true);
                setBlogsLoading(false);
            });
           
        }, []
    )   
    console.log(blog); 
    
    return (
        <Container maxWidth="md">
        <div className={classes.gridroot}>
           {/* {slug} */}
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
                        {blog.title}
                    </BlogTypography>
                    <Grid container align='center' spacing={2}>
                        <Grid item >
                            <Avatar src={blog.user.avatar} alt={blog.user.name}/>
                        </Grid>

                        <Grid item className={classes.usernameContainer}>
                            <Typography>
                                {blog.user.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container align='center' justify='space-between'>
                        <Grid items>
                            <ReadTimeTypography variant="subtitle1" color="textSecondary"  gutterBottom>
                                    {blog.readTime}
                            </ReadTimeTypography>
                        </Grid>
                        <Grid items>
                            <SocialProvider useStyles={useMoonSocialLinkStyles}>
                                <SocialLink brand={'FacebookCircle'} href={'https://www.facebook.com/siriwat.kunaporn/'} />
                                <SocialLink brand={'Twitter'} href={'https://twitter.com/siriwatknp'} />
                                <SocialLink brand={'LinkedIn'} href={'https://www.linkedin.com/in/siriwat-kunaporn-1b4095158/'} />
                            </SocialProvider>
                        </Grid>

                    </Grid>
                <Grid container spacing={2} style={{marginTop:20}} >
                    <Grid item xs={12} >
                        <img src={blog.image} alt={blog.title} style={{height:500,width:850,objectFit:'cover'}}/>
                    </Grid>
                    <Grid>
                        <Grid item xs={12}>
                            <BlogTypography  variant="h4" gutterBottom>
                                {blog.title}
                            </BlogTypography>
                        </Grid>

                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="textPrimary" component="p" dangerouslySetInnerHTML={{ __html:blog.body }}>
                        </Typography>
                    </Grid>
                </Grid>
            </>
                }
      </div>

      </Container>
 
           
    );
}

export default SingleBlog;