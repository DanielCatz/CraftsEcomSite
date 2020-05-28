import User from './user-model';

export const getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch(err => console.log(err));
};

export const getUser = async (req, res) => {
  const { body } = req;

  if (!body) return res.status(400).json({ success: false, error: 'Error' });

  await User.find({ email: body.email }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!user.length) {
      // does not exist
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    return res.status(200).json({ success: true, user });
  }).catch(err => console.log(err));
};

export const createUser = (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user'
    });
  }

  body.role = 'customer';
  console.log(body);
  const user = new User(body);

  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user
    .save()
    .then(() =>
      res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created!'
      })
    )
    .catch(error =>
      res.status(400).json({
        error,
        message: 'User not created!'
      })
    );
};
