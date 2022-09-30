import { useEffect, useState } from "react";
import { useStyles } from './viewport.css';

const ViewPort = () => {
    const classes = useStyles();
    const [size, setSize] = useState({
        width: window.screen.width, height:
            window.screen.height
    });
    useEffect(() => {
        const updateWindow = () => {
            let { innerWidth, innerHeight } = window;
            setSize({ width: innerWidth, height: innerHeight });
        }
        window.addEventListener('resize', updateWindow);
        return () => {
            window.removeEventListener('resize', updateWindow);
        }
    });
    return (
        <div className={classes.wrapper}>
            <h1>
                Your ViewPort size is:
            </h1>
            <div className={classes.textSize}>
                {size.width}px <b>X</b> {size.height}px
            </div>
            <hr />
        </div>
    );
}
export default ViewPort;