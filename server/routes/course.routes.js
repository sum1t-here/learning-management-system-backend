import { Router } from 'express';
import {
  getAllCourses,
  getLecturesByCourseId,
} from '../controllers/course.controller';
import { isLoggedIn } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', getAllCourses);
router.get('/:id', isLoggedIn, getLecturesByCourseId);

export default router;
