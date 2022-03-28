import React, { StrictMode } from 'react';
import {render} from 'react-dom';
import IndexPage from "./pages/indexPage";
import {ChakraProvider} from '@chakra-ui/react';
import './index.css';
import './i18n';

const rootElement = document.getElementById("root");

render(
    <StrictMode>
        <ChakraProvider>
            <IndexPage />
        </ChakraProvider>
    </StrictMode>,
    rootElement
);
