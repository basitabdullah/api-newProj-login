import { User } from "../model/user.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.json({
      status: "false",
      msg: "User Already Exists",
    });

  await User.create({
    name,
    email,
    password,
  });

  res.json({
    status: "true",
    msg: "registered",
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user)
    return res.json({
      status: "false",
      msg: "Not found!",
    });
  res.json({
    status: "true",
    msg: "Logged In",
  });
};
