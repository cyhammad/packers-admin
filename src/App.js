import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./styles/app.scss";
import { theme } from "./styles/MUItheme";



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
