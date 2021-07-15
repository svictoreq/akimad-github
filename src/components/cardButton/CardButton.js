// Material-ui imports
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";

// Local imports
import useStyles from "./cardButtonStyles"

function CardButton({ children, onClick }) {
  const classes = useStyles();
  return (
    <ButtonBase
      classes={{ root: classes.buttonBaseRoot }}
      onClick={onClick}
    >
      <Paper classes={{ root: classes.paperRoot }}>
        {children}
      </Paper>
    </ButtonBase>
  );
}

export default CardButton;
