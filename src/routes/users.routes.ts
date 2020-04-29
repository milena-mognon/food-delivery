import { Router } from 'express';
import multer from 'multer';
import CreateUserService from '../services/users/CreateUserService';
import uploadConfig from '../config/upload';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import ensureAuthenticated from '../middlewares/ensureAuthentidated';

const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.get('/', (request, response) => {
  return response.send();
});

userRouter.post('/', async (request, response) => {
  const { name, email, password, phone, gender, birthdate } = request.body;

  const usersService = new CreateUserService();

  const user = await usersService.execute({
    name,
    email,
    password,
    phone,
    gender,
    birthdate,
  });
  return response.json(user);
});

userRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      filename: req.file.filename,
    });

    delete user.password;

    return res.json(user);
  },
);

export default userRouter;
