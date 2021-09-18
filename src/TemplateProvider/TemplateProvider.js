import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { createContext } from "react";
export const ThemeContext = createContext(null);
const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          width: "28%",
          boxShadow: "none",
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
    },
  });
  return (
    <ThemeContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default TemplateProvider;
