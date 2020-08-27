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
      error: 'User data missing'
    });
  }

  const date = new Date(); // Now
  date.setDate(date.getDate() + 30);

  const user = new User({
    name: body.name,
    email: body.email,
    lastlogin: date,
    role: 'customer'
    // TODO: look into offloading roles to auth0
  });

  user
    .save()
    .then(() =>
      res.status(201).json({
        success: true,
        id: user._id,
        message: 'Created!'
      })
    )
    .catch(error =>
      res.status(400).json({
        error,
        message: 'User not created due to invalid input!'
      })
    );
};

export const getsertUser = (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide User info'
    });
  }
  // Set role incase of insert
  body.role = 'customer';
  const date = new Date(); // Now
  date.setDate(date.getDate() + 30);
  body.lastLogin = date;
  const user = new User(body);

  const query = { email: body.email };
  User.findOneAndUpdate(query, body, { upsert: true, new: true })
    .then(data => {
      res.status(201).json({
        success: true,
        id: user._id,
        message: 'User updated!',
        data
      });
    })
    .catch(error =>
      res.status(400).json({
        error,
        message: 'User not created!'
      })
    );
};
