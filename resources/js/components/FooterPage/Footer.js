import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
  makeStyles,
} from '@material-ui/core/styles';
// import { FontProvider, Font } from 'website/src/components/Font';

import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
// import {
//   EmailSubscribe,
//   EmailTextInput,
//   SubmitButton,
// } from '@mui-treasury/components/EmailSubscribe';
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';
// import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';

const useStyles = makeStyles(({ palette, typography }) => ({
  top: {
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  middle: {
    backgroundColor: palette.type === 'dark' ? '#192D36' : palette.action.hover,
  },
  bottom: {
    backgroundColor:
      palette.type === 'dark' ? '#0F2128' : palette.action.selected,
  },
  newsletterText: {
    color: '#fff',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
  },
  form: {
    margin: 0,
    minWidth: 343,
    fontSize: '0.875rem',
  },
  legalLink: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    justifyContent: 'center',
    color: palette.text.hint,
    letterSpacing: '0.5px',
  },
  divider: {
    height: 2,
    margin: '-1px 0',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    filter: 'grayscale(80%)',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  info: {
    ...typography.caption,
    color: palette.text.hint,
    marginTop: 8,
  }
}));

const Footer = React.memo(function Footer() {
  const classes = useStyles();
  return (
    // <FontProvider
    //   fonts={[{ font: 'Rambla', weights: [400, 700] }, { font: 'Nunito' }]}
    // >
      <Box width={'100%'} style={{marginTop:50}}>
        <Box px={2} py={10} className={classes.middle}>
          <Container disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4} lg={3}>
                <Box
                  component={'img'}
                  mt={-3}
                  width={120}
                  height={64}
                  src="https://cdn.dribbble.com/users/1007527/screenshots/2992564/arc-logo.png"
                  alt=""
                  borderRadius={12}
                />
                <Typography className={classes.info}>
                  <h6 index={1}>
                    Architect VR, 830-1183 BKK Thailand 10220
                  </h6>
                </Typography>

                <Typography className={classes.info}>
                  <h6 index={1}>
                    Blogs 2020
                  </h6>
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <h5>Products</h5>
                      </CategoryTitle>
                      <CategoryItem>
                        <h5 index={1}>Snowflake Free</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>Coloristic</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>Summer free</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>Lucky store</h5>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <h5>Information</h5>
                      </CategoryTitle>
                      <CategoryItem>
                        <h5 index={1}>License</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>Privacy Policy</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>Releases</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>FAQ</h5>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <h5>About</h5>
                      </CategoryTitle>
                      <CategoryItem>
                        <h5 index={1}>Contact</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>Team</h5>
                      </CategoryItem>
                      <CategoryItem>
                        <h5 index={1}>Support</h5>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8} lg={3} style={{ marginLeft: 'auto' }}>
                <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                  <CategoryTitle>
                    <h5>Subscribe</h5>
                  </CategoryTitle>
                </CategoryProvider>
                <SocialProvider useStyles={usePoofSocialLinkStyles}>
                  <SocialLink brand={'Envelope'} />
                  <SocialLink brand={'GooglePlus'} />
                  <SocialLink brand={'Pinterest'} />
                  <SocialLink brand={'Dribbble'} />
                </SocialProvider>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container disableGutters>
          <Divider className={classes.divider} />
        </Container>
        <Box px={2} py={3} className={classes.bottom}>
          <Container disableGutters>
            <ColumnToRow
              at={'md'}
              columnStyle={{ alignItems: 'center' }}
              rowStyle={{ alignItems: 'unset' }}
            >
              <Item grow ml={-2} shrink={0}>
                <NavMenu useStyles={usePlainNavigationMenuStyles}>
                  <ColumnToRow at={'sm'}>
                    <NavItem className={classes.legalLink}>
                      <h6>Terms & Conditions</h6>
                    </NavItem>
                    <NavItem className={classes.legalLink}>
                      <h6>Privacy Policy</h6>
                    </NavItem>
                  </ColumnToRow>
                </NavMenu>
              </Item>
              <Item>
                <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                  <Typography
                    component={'p'}
                    variant={'caption'}
                    color={'textSecondary'}
                  >
                    <h6 index={1}>
                      Designed by  © 2020 All right
                      reserved
                    </h6>
                  </Typography>
                </Box>
              </Item>
            </ColumnToRow>
          </Container>
        </Box>
      </Box>
   
  );
});

export default Footer;