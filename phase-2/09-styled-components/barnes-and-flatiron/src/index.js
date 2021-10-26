import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

const theme = {
    colors:{
        primary:"#3d6b65"
    },
    font:{
        primary:"'Oswald', sans-serif"
    }
    
}

ReactDOM.render(
<BrowserRouter>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
</BrowserRouter>
,document.getElementById('root'));
