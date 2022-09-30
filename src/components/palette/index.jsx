import {useStyles} from "./palette.css";
 const Palette = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                Main
            </div>
            <div className={classes.dark}>
                dark
            </div>
            <div className={classes.light}>
                light
            </div>
            <div className={classes.main2}>
                Main
            </div>
            <div className={classes.dark2}>
                dark
            </div>
            <div className={classes.light2}>
                light
            </div>
        </div>
    );
 }
 export default Palette;