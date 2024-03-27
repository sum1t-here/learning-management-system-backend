import { Course } from '../models/course.model.js';
import AppError from '../utils/error.utils.js';

/**
 * @ALL_COURSES
 * @ROUTE @GET {{url}}/api/v1/courses
 * @ACCESS Public
 */

const getAllCourses = async (req, res, next) => {
  try {
    // Find all the courses without lectures
    const courses = await Course.find({}).select(-lectures);

    res.status(200).json({
      suceess: true,
      message: 'All Course',
      courses,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

/**
 * @GET_LECTURES_BY_COURSE_ID
 * @ROUTE @POST {{URL}}/api/v1/courses/:id
 * @ACCESS Private(ADMIN, logged in,subscribed users only)
 */

const getLecturesByCourseId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id);

    if (!course) {
      return next(new AppError('Invalid course id or course not found.', 404));
    }

    res.status(200).json({
      success: true,
      message: 'Course lectures fetched successfully',
      lectures: course.lectures,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

export { getAllCourses, getLecturesByCourseId };
