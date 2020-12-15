import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';


const ReadTimeTypography = styled(Typography)`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const useStyles = makeStyles({
    root: {
      "& .makeStyles-root-10": {
          display: 'inline-block',
      },
    },
    media: {
      height: 140,
      objectFit: 'cover',
    },
    usernameContainer: {
      display: 'flex',
      alignItems: 'center',
    },
});



function BlogItem(props){
    const classes = useStyles();
    const { data, onClick } = props
    console.log(props);
    return(
        <Card className={classes.root}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    image={data.image}
                    title={data.title}
                    component="img"
                    height="300"
                    width="300"

                />

                    <CardContent >
                        {/* <Grid container align='center' justify='space-between'>
                            <Grid item>
                                <Avatar src={data.user.avatar} alt={data.user.name}/>
                            </Grid>
                            <Grid item className={classes.usernameContainer}>
                                <Typography>
                                    {data.user.name}
                                </Typography>
                            </Grid>
                        </Grid> */}
                        <Typography gutterBottom variant="h5" component="h2">   
                            {data.title}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p" dangerouslySetInnerHTML={{ __html:data.shortBody }}>
                        </Typography>
                        <ReadTimeTypography variant="caption" color="textSecondary"  gutterBottom>
                            {data.readTime}
                        </ReadTimeTypography>
                    </CardContent>
            </CardActionArea>
        
            <CardActions>
                <SocialProvider useStyles={usePoofSocialLinkStyles}>
                    <SocialLink brand={'Pinterest'} />
                    <SocialLink brand={'Facebook'}  />
                    <SocialLink brand={'Twitter'} />
                    <SocialLink brand={'Dribbble'} />
                </SocialProvider>
            </CardActions>
        </Card>

    );
}

export default BlogItem;