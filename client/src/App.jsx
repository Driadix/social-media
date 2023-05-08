import {
  BrowserRouter, Navigate, Routes, Route,
} from 'react-router-dom';
import HomePage from 'scenes/HomePage';
import LoginPage from 'scenes/LoginPage';
import ProfilePage from 'scenes/ProfilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';

function App() {
  const themeMode = useSelector((state) => state.app.theme);
  console.log(themeMode);
  const theme = useMemo(() => createTheme(themeSettings(themeMode)), [themeMode]);
  const isLoggedIn = Boolean(useSelector((state) => state.user.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/auth" element={<LoginPage />} />
            <Route
              path="/"
              element={isLoggedIn ? <HomePage /> : <Navigate to="/auth" />}
            />
            <Route
              path="/profile/:userId"
              element={isLoggedIn ? <ProfilePage /> : <Navigate to="/auth" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
