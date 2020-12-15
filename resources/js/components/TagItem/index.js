import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import cx from 'clsx';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';


const useStyles = makeStyles(({ breakpoints, spacing }) =>({
tagroot: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },

 tagmedia:{
     width: '200px',
     height:'200px',
     objectFit: 'cover',
 },
  tagcontent: {
    padding: 24,
  },
  tagcta: {
    marginTop: 24,
    textTransform: 'initial',
  },
  tabroot: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
}));

const ReadTimeTypography = styled(Typography)`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const TagsTypography = styled(Typography)`
    margin-top: 55px;
    margin-bottom: 35px;
    font-size: 40px;
`;

function TagItem(props){
    const classes = useStyles();
    const styles = useStyles();
    const {
        button: buttonStyles,
        ...contentStyles
      } = useBlogTextInfoContentStyles();

    const shadowStyles = useOverShadowStyles();

    const { data ,onClick } = props;

    return(
        <Card className={cx(styles.tagroot, shadowStyles.root)}>
        <CardMedia
            className={styles.tagmedia}
            image={data.image}
            component="img"
            
        />
        <CardContent>
            <TextInfoContent
            classes={contentStyles}
            overline={'28 MAR 2019'}
            heading={data.name}
            body={data.shortdescription}
            
            />
        <ReadTimeTypography variant="body2" gutterBottom>
            {data.readTime}
        </ReadTimeTypography>
            <Button className={buttonStyles} onClick={onClick}>Browse</Button>
        </CardContent>
    </Card>
    )
}

export default TagItem;