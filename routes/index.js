import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Counter from '../src/containers/counter'

const router = express.Router();

router.get('/', (req, res) => {
    const reactDOM = ReactDOMServer.renderToString(<Counter />);
    res.render('react', { component: Counter, dom: reactDOM })
});

export default router;
