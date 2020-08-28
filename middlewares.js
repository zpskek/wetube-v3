import dotenv from 'dotenv';
import multer from 'multer';
import routes from './routes';

dotenv.config();

const multerAvatar = multer({ dest: 'uploads/avatar' });

export const uploadAvatar = multerAvatar.single('avatar');

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.loggedUser = req.user;
  console.log('middle', req.user);
  next();
};

export const beforeCheckUser = (req, res, next) => {
  console.log('beforeCheckUser', req.user);
  next();
};

export const afterCheckUser = (req, res, next) => {
  console.log('afterCheckUser', req.user);
  next();
};
