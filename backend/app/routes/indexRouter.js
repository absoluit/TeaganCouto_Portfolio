import express from 'express';
import router from 'express';

import indexRouter from '../controllers/indexController.js';

router.get('/', indexRouter);

export default router;