import { createMuiTheme } from "@material-ui/core/styles"
import Color from "color"

const textColor = Color("#2F3241")

const primaryColor = Color("#4BC3C4")
const primary = {
  main: primaryColor.hex(),
  dark: "#233a46",
}
const secondary = {
  main: "#F75445",
}
const error = {
  main: "#f44336",
  dark: "#8D2C27",
}
const text = {
  primary: "#fff",
  secondary: textColor.hex(),
}

const spacing = (factor) => factor * 8

export default createMuiTheme({
  spacing,
  palette: {
    primary,
    secondary,
    text,
    error,
    divider: "#707070",
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    h1: {
      fontWeight: 700, // bold
      fontSize: "9.6rem",
    },
    h2: {
      fontWeight: 700, // bold
      fontSize: "6rem",
    },
    h3: {
      fontWeight: 700, // bold
      fontSize: "4.8rem",
    },
    h4: {
      fontWeight: 700, // bold
      fontSize: "3.4rem",
    },
    h5: {
      fontWeight: 700, // bold
      fontSize: "2.4rem",
    },
    h6: {
      fontWeight: 700, // bold
      fontSize: "1.6rem",
    },
    subtitle1: {
      fontSize: "1.6rem",
    },
    subtitle2: {
      fontSize: "1.6rem",
      fontWeight: 600, // semi-bold
    },
    body1: {
      fontSize: "1.6rem",
    },
    body2: {
      fontSize: "1.6rem",
      fontWeight: 700, // bold
    },
    button: {
      fontSize: "1.4rem",
    },
    caption: {
      fontSize: "1.2rem",
    },
    overline: {
      fontSize: "1.2rem",
    },
  },
  props: {
    MuiTabs: {
      indicatorColor: "primary",
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiFilledInput: {
      disableUnderline: true,
    },
    MuiAppBar: {
      color: "default",
    },
  },
  overrides: {
    MuiAvatar: {
      rounded: {
        borderRadius: 8,
      },
    },
    MuiAppBar: {
      colorDefault: {
        color: "#fff",
        backgroundColor: "#282B3B",
        borderTop: "1px solid rgba(112,112,112, 0.34)",
        borderBottom: "1px solid rgba(112,112,112, 0.34)",
      },
    },
    MuiTabs: {
      indicator: {
        display: "none",
      },
    },
    MuiTab: {
      root: {
        textTransform: "initial",
      },
      textColorInherit: {
        opacity: 1,
        fill: "transparent",
        stroke: "#767881",
        "&.Mui-selected": {
          color: primary.main,
          stroke: primary.main,
          backgroundColor: primaryColor.alpha(0.17).string(),
          fill: primary.main,
        },
      },
      labelIcon: {
        minHeight: "initial",
        "& .MuiTab-wrapper": {
          lineHeight: "1rem",
        },
      },
    },
    PrivateTabIndicator: {
      colorPrimary: {
        backgroundColor: primary.dark,
      },
    },
    MuiDialog: {
      paper: {
        width: "100%",
        backgroundColor: "#212433",
        border: "1px solid #767881",
        boxShadow: "3px 2px 4px #0D0E160D",
      },
    },
    MuiDialogTitle: {
      root: {
        padding: 25,
        paddingBottom: 0,
      },
    },
    MuiDialogContent: {
      root: {
        padding: 25,
      },
    },
    MuiDialogActions: {
      root: {
        paddingTop: 0,
        padding: 25,
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: "#767881",
      },
    },
    MuiFormControlLabel: {
      label: {
        "&.Mui-disabled": {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
    MuiInputBase: {
      root: {
        "&.Mui-disabled": {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
    MuiInputLabel: {
      root: {
        marginBottom: spacing(1),
      },
    },
    MuiFormHelperText: {
      root: {
        color: "#fff",
        opacity: 0.5,
        marginBottom: spacing(1),
        "&.Mui-error": {
          opacity: 0.85,
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: text.primary,
        opacity: 0.5,
        "&.Mui-error": {
          opacity: 0.85,
        },
      },
    },
    MuiRadio: {
      root: {
        color: "#fff",
      },
      colorSecondary: {
        "&.Mui-disabled": {
          color: "rgba(255, 255, 255, 0.26)",
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: "#fff",
      },
    },
    MuiChip: {
      root: {
        fontSize: "1.5rem",
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#282B3B",
        border: "0.5px solid #FFFFFF1A",
        borderRadius: 5,
        "&:hover, &.Mui-focused": {
          backgroundColor: "rgb(58 62 80)",
          borderColor: "rgb(84 88 105)",
        },
        "&.Mui-error": {
          borderColor: "rgba(244,67,54, 0.85)",
        },
      },
      input: {
        padding: "2px 8px 2px",
        height: 32,
      },
      multiline: {
        padding: "6px 8px 6px",
        minHeight: 38,
      },
      adornedEnd: {
        paddingRight: 6,
      },
      adornedStart: {
        paddingLeft: 6,
      },
    },
    MuiSelect: {
      selectMenu: {
        padding: "8.5px 8px",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&:hover, &.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(84 88 105)",
            borderWidth: 2,
          },
        },
      },
      notchedOutline: {
        borderColor: "#FFFFFF1A",
      },
      input: {
        padding: "2px 8px 2px",
        height: 32,
      },
      multiline: {
        padding: "6px 8px 6px",
        minHeight: 38,
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
        borderRadius: 8,
        textTransform: "initial",
        minWidth: 48,
        "&.Mui-disabled": {
          color: "rgba(255, 255, 255, 0.26)",
        },
      },
      contained: {
        color: text.secondary,
        backgroundColor: "#fff",
        "&.Mui-disabled": {
          color: textColor.alpha(0.56).string(),
          backgroundColor: "rgba(255, 255, 255, 0.26)",
        },
      },
      containedPrimary: {
        color: text.secondary,
        "&:hover": {
          backgroundColor: "#348f90",
        },
      },
      containedSizeLarge: {
        padding: "12px 14px",
      },
      outlined: {
        borderColor: text.primary,
        "&.Mui-disabled": {
          borderColor: "rgba(255, 255, 255, 0.26)",
        },
      },
      outlinedSecondary: {
        "&.Mui-disabled": {
          borderColor: "rgba(255, 255, 255, 0.26)",
        },
      },
      outlinedSizeLarge: {
        padding: "11px 14px",
      },
      sizeSmall: {
        fontSize: ["1.3rem", "!important"],
      },
      sizeLarge: {
        fontSize: ["1.5rem", "!important"],
      },
    },
    MuiFab: {
      root: {
        fontWeight: 600,
        color: text.secondary,
        backgroundColor: "#fff",
        "&.Mui-disabled": {
          color: textColor.alpha(0.56).string(),
          backgroundColor: "rgba(255, 255, 255, 0.26)",
        },
      },
      primary: {
        color: text.secondary,
        "&:hover": {
          backgroundColor: "#348f90",
        },
      },
    },
    MuiIconButton: {
      root: {
        color: text.primary,
        fontSize: "2.4rem",
        "&.Mui-disabled": {
          color: "rgba(255, 255, 255, 0.26)",
        },
      },
      sizeSmall: {
        fontSize: "1.8rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "2.4rem",
      },
      fontSizeSmall: {
        fontSize: "2rem",
      },
      fontSizeLarge: {
        fontSize: "3.5rem",
      },
    },
    MuiCard: {
      root: {
        backgroundColor: "#212433",
        border: "0.25px solid #767881",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 10,
      },
      elevation1: {
        boxShadow: "3px 2px 4px #0D0E160D",
      },
    },
    MuiContainer: {
      maxWidthLg: {
        "@media (min-width: 1280px)": {
          maxWidth: 1016,
        },
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: "#212433",
        border: "0.25px solid #767881",
      },
    },
    MuiListItem: {
      root: {
        "&.Mui-selected, &.Mui-selected:hover": {
          backgroundColor: "rgba(255,255,255,0.08)",
        },
      },
      button: {
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.08)",
        },
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: "1.8rem",
      },
      secondary: {
        fontWeight: 400,
        fontSize: "1.4rem",
      },
    },
    MuiAlert: {
      filledInfo: {
        backgroundColor: "rgb(50, 50, 50)",
        color: "#fff",
      },
    },
  },
})
