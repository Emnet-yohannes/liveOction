import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Box,Typography, Card, CardMedia, Grid } from '@material-ui/core'
import Image1 from '../../static/image/background1.jpg';
import Profile1 from '../../static/image/profile1.jpg'
import useStyles from './styles';
import Countdown from 'react-countdown';
import renderer from '../FirstPage/CountDown/CountDown';
import Avatar from '@material-ui/core/Avatar';
import PublishIcon from '@material-ui/icons/Publish';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlaceABidButton from '../PlaceABidButton/PlaceABidButton';


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} style={{ fontWeight: "bold", color: "#444444" }}>
                {isReadMore ? "...READ MORE" : "   SHOW LESS"}
            </span>
        </p>
    );
};



const FirstPage = () => {

    const [posts, setPosts] = useState([]);

    const getPhoto = () => {
        axios.get(process.env.REACT_APP_BACKEND_URL)
            .then((response) => {
                console.log(response);
                const fetcheddata = response.data;
                setPosts(fetcheddata);
            });
    };
    useEffect(() => getPhoto(), []);
    // console.log(posts[0].coverImage)
    const classes = useStyles()

    return (

        <Box className={classes.mainContainer} >
            {/* <ArrowBackIcon style={{ marginBottom: "20px" }} /> */}
            <div className={classes.mainBody}>

                <Card className={classes.root}>
                    <CardMedia
                        component="img"
                        alt="Loading"
                        height="420"
                        image={posts[0] ? Image1 : "loading"}
                        title="Loading"
                    />
                    <Grid container className={classes.font}>
                        <Grid item xs={6} sm={6} >
                            <Box p={0.8} className={classes.timer}>
                                {
                                posts[0] &&
                                <Countdown
                                    date={posts[0] &&  new Date(posts[0].deadLine)}
                                    renderer={renderer}
                                />
                                }
                                
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} className={classes.floatActionButtons}>
                            <div className={classes.root2}>
                                <Avatar className={classes.kColorAvatar}>
                                    <FavoriteBorderIcon />
                                </Avatar>
                                <Avatar className={classes.kColorAvatar}>
                                    <PublishIcon variant="outlined" />
                                </Avatar>
                                <Avatar className={classes.kColorAvatar}>
                                    <FullscreenIcon />
                                </Avatar>
                            </div>
                        </Grid>
                    </Grid >
                </Card>

                <Typography variant="h4" className={classes.title}>
                    {posts[0] && posts[0].title}
                </Typography>
                <div className={classes.profileContainer}>
                    <div className={classes.profileAvatar}>
                        <Avatar src={Profile1} />
                    </div >
                    <div className={classes.ownerContainer}>

                        <div>
                            <Typography variant="subtitle2" className={classes.ownerStatic}>
                                Owner
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6">
                                {posts[0]?posts[0].owner:""}
                            </Typography>
                        </div>
                    </div>
                </div>
                <Typography variant="h4" className={classes.descriptionStatic}>
                    Description
                </Typography>
                <Typography variant="subtitle1" className={classes.description}>
                    <ReadMore>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam a interdum quam. Phasellus et lobortis erat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam a interdum quam. Phasellus et lobortis erat.
                    </ReadMore>

                </Typography>
            </div>
            <Box p={3} className={classes.bottomContainer}>

                <Typography variant="subtitle1" className={classes.currentBid}>
                    Current Bid
                </Typography>
                <Grid container >
                    <Grid items xs={6}>
                        <Typography variant="h6" className={classes.amount}>
                            1.44 ETH
                        </Typography>
                    </Grid>
                    <Grid items xs={6} className={classes.placeAbid}>
                        <PlaceABidButton />
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}

export default FirstPage;
