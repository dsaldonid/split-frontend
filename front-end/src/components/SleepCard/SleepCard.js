import { Box, Card, Typography, CardContent, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: 275,
        height: 140,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 10
    },
    text: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    padd: {
        marginRight: 10
    }
});

export default function SleepCard({ sleep }) {
    const classes = useStyles();
    return (
        <div className="SleepCard">
            <Card className={classes.root}>
                <Typography variant="h5" color="textPrimary" component="h5">
                    {new Date(sleep.create).toLocaleString()}
                </Typography>
                <CardContent className={classes.text}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <div className={classes.padd}>
                            <Typography variant="h6" color="textSecondary" component="h2">
                                Start Time
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {new Date(sleep.start).toLocaleTimeString()}
                                </Typography>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" color="textSecondary" component="p">
                                End Time
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {new Date(sleep.end).toLocaleTimeString()}
                                </Typography>
                            </Typography>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </div>


    )
}