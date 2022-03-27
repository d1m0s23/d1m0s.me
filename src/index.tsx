import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import {ChakraProvider} from '@chakra-ui/react';
import {ParallaxProvider} from "react-scroll-parallax";
import Particles from "react-tsparticles";

const rootElement = document.getElementById("root");

render(
    <ChakraProvider>
        <ParallaxProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage/>} />
                </Routes>
            </BrowserRouter>
        </ParallaxProvider>
    </ChakraProvider>,
    rootElement
);
