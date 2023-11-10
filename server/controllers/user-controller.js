import User from "../model/user-schema.js";
export const userSignup = async (req, resp) => {
  try {
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    resp.status(200).send(newUser);
  } catch (error) {
    console.log("error", error.message);
  }
};

export const userLogin = async (req, resp) => {
  try {
    console.log(req.body);
    const user = await User.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.email }],
      password: req.body.password,
    });
    console.log(user);
    resp.status(200).send(user);
  } catch (error) {
    resp.status(500).json("Error ", error.message);
  }
};
