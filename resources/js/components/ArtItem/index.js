import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles(() => ({
    rootart: {
        margin: 'auto',
        borderRadius: 0,
        position: 'relative',
      },
      rootimage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    content: {
      padding: 24,
    },
    cta: {
      display: 'block',
      textAlign: 'center',
      color: '#fff',
      letterSpacing: '3px',
      fontWeight: 200,
      fontSize: 12,
    },
    title: {
      color: '#fff',
      letterSpacing: '2px',
    },
  }));

const ReadTimeTypography = styled(Typography)`
    margin-top: 10px;
    margin-bottom: 10px;
`;

  
const ArtsTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
`;

function ArtItem(props){
    const styles = useStyles();
    const mediaStyles = useCoverCardMediaStyles();
    const shadowStyles = useLightTopShadowStyles();
    const { data, onClick } = props;
    return(
        <Card className={cx(styles.rootart, shadowStyles.root)}>
        <img 
            className={mediaStyles.root}
            src={data.image} alt={data.title}
        />
        <CardActionArea>
            <CardContent className={styles.content}>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                minHeight={360}
                color={'common.white'}
                textAlign={'center'}
            >
                <h1 className={styles.title}>{data.title}</h1>
                <p>{data.shortdescription}</p>
            </Box>
            <Typography className={styles.cta} variant={'overline'}  onClick={onClick}>
                Explore
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

    )
}

export default ArtItem;