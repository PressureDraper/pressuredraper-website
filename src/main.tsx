import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './themes/theme.ts';
import { UIProvider } from './context/UIContext.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <UIProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </UIProvider>
    </StrictMode>,
);
