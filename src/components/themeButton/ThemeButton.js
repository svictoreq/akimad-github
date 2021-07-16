// Material-ui imports
import IconButton from "@material-ui/core/IconButton";

// Material-ui icon imports
import DarkThemeIcon from "@material-ui/icons/Brightness2";
import LightThemeIcon from "@material-ui/icons/Brightness7";

function ThemeButton({ classes, onClick, theme }) {
  return (
    <IconButton
      color="inherit"
      onClick={onClick}
      classes={classes}
    >
      {theme === "dark"
        ? (
          <LightThemeIcon />
        ) : (
          <DarkThemeIcon />
        )
      }
    </IconButton>
  );
}

export default ThemeButton;
