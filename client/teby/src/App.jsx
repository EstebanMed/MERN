import {useState, useCallback} from 'react';
import Button from './components/generics/button/button.style';
import Home from './pages/home';
import {ThemeProvider} from '@emotion/react';
import smoothTheme from './themes/smooth.theme';
import darkTheme from './themes/dark.theme';
function App() {
    const [currentTheme, setCurrentTheme] = useState(false);
    const changeTheme = useCallback(() => {
        setCurrentTheme(!currentTheme);
    }, [currentTheme]);
    return (
        <div>
            <ThemeProvider theme={
                currentTheme ? darkTheme : smoothTheme
            }>
                <Home changeTheme={changeTheme}></Home>
                <Button>But</Button>
            </ThemeProvider>
        </div>
    )
}

export default App
