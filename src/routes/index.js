import express from 'express';
import user from './user';

let router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Pug - Fun', currentTime: req.requestTime});
});

router.use('/users', user);

export default router;
