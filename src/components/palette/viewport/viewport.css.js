import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles(theme => ({
    wrapper: {
        minHeight: '100vh',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        color: 'red',
    },
    textSize: {
        fontSize: '35px',
    },
}));