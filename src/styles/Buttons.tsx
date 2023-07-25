import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Button = styled("button", {
  height: "3rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey1",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  whiteSpace: "nowrap",
  transition: "0.3s",
  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
        fontWeight: "500",
        "&:hover": {
          color: "$brand1",
          transition: "0.3s",
        },
      },
      primary: {
        background: "$brand1",
        borderColor: "$brand1",
        color: "$whiteFixed",
        "&:hover": {
          backgroundColor: "$brand2",
          borderColor: "$brand2",
          transition: "0.3s",
        },
        "@mobile": {
          height: "2.5rem",
          minHeight: "2.5rem",
          borderRadius: "0.5rem",
        },
      },
      outline: {
        borderColor: "$grey4",
        color: "$grey4",
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: "$grey4",
          color: "$grey1",
          transition: "0.3s",
        },
      },
      toggleTheme: {
        height: "2.2rem",
        minWidth: "3rem",
        maxWidth: "3rem",
        padding: "",
        borderRadius: "2rem",
        borderColor: "$grey4",
        color: "$grey4",
        backgroundColor: "transparent",
        position: "relative",
        "&::before": {
          content: "",
          width: "1.5rem",
          height: "1.5rem",
          backgroundColor: "$grey4",
          position: "absolute",
          left: "0.25rem",
          borderRadius: "50%",
          transition: "0.3s",
        },
        "&::after": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",

          content: "🌙",
          height: "100%",
          width: "100%",
          backgroundColor: "",
          right: "0.25rem",
          position: "absolute",
          borderRadius: "50%",
          transition: "0.3s",
        },

        "@mobile": {
          position: "absolute",
          right: "5rem",
          top: "0.375rem",
        },
      },

      icon: {
        borderColor: "$grey1",
        backgroundColor: "$grey1",
        paddingInline: "1rem",
        "& svg": {
          fill: "$grey2",
        },
        "&:hover": {
          backgroundColor: "$grey1",
          transition: "0.3s",
        },
      },
      circle: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        minWidth: "2.75rem",
        minHeight: "2.75rem",
        ["& + a"]: {
          marginLeft: "$2",
        },
        ["&.instagram"]: {
          backgroundColor: "$socialInstagram",
          borderColor: "$socialInstagram",
          color: "$whiteFixed",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$socialInstagram",
            color: "$socialInstagram",
            transition: "0.3s",
          },
        },
        ["&.facebook"]: {
          backgroundColor: "$socialFacebook",
          borderColor: "$socialFacebook",
          color: "$whiteFixed",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$socialFacebook",
            color: "$socialFacebook",
            transition: "0.3s",
          },
        },
        ["&.linkedin"]: {
          backgroundColor: "$socialLinkedin",
          borderColor: "$socialLinkedin",
          color: "$whiteFixed",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$socialLinkedin",
            color: "$socialLinkedin",
            transition: "0.3s",
          },
        },
        "&:hover": {
          backgroundColor: "$grey5",
          transition: "0.3s",
        },
        "@mobile": {
          width: "5rem",
          height: "2.7rem",
          minWidth: "5rem",
          minHeight: "2.7rem",
          borderRadius: "0.5rem",
        },
      },
    },
    darkMode: {
      true: {
        "&::before": {
          left: "auto",
          right: "0.25rem",
          transition: "0.3s",
        },
        "&::after": {
          justifyContent: "flex-start",
          content: "☀️",
          left: "0.5rem",
          right: "auto",
          transition: "0.3s",
        },
      },
    },
    ...colors,
  },
});
