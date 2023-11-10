import { Button, Dialog, TextField, Typography, styled } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import { authLogin, authSignup } from "../../services/api";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  min-height: 70vh;
  width: 50vw;
  min-width: 40vw;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 38%;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    color: #fb641b;
  }
`;

const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const LoginDialog = ({ open, setOpen }) => {
  const { setUser } = useContext(DataContext);
  const initialformState = {
    firstname: " ",
    lastname: " ",
    username: " ",
    email: " ",
    password: " ",
    phone: " ",
  };

  const [login, setLogin] = useState(true);
  const [formState, setformState] = useState(initialformState);
  const [loginCred, setloginCred] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setformState({ ...formState, [e.target.name]: e.target.value });
  };
  const toggleForm = () => {
    setLogin(!login);
  };
  const handle = () => {
    setOpen(false);
  };

  const userSignup = async () => {
    let resp = await authSignup(formState);
    if (!resp) alert("Sign up Unsuccessful");
    else {
      alert("Signup Successfull");
      setOpen(false);
      setUser(resp.firstname);
      setLogin(true);
    }
  };
  const userLogin = async () => {
    let resp = await authLogin(loginCred);
    if (!resp) alert("Invalid Credentials");
    else {
      alert("Login Successful");
      setOpen(false);
      setUser(resp.firstname);
      setLogin(true);
    }
  };
  const handleChange = (e) => {
    setloginCred({ ...loginCred, [e.target.name]: e.target.value });
  };

  return (
    <Dialog
      open={open}
      onClose={handle}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image paddingX={5} paddingTop={5}>
          <Typography variant="h5">Login</Typography>
          <Typography marginTop={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            harum, accusatus laudantium placeat nulla, amet, illo reprehenderit.
            Mollitia?
          </Typography>
        </Image>
        {login ? (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={handleChange}
              name="email"
              label="Enter Email/Mobile Number"
            />
            <TextField
              variant="standard"
              onChange={handleChange}
              name="password"
              label="Enter Password"
            />
            <Typography>
              By continuing,you are agreeing to Flipkart's Term of Use and
              Privacy Policy.
            </Typography>
            <LoginButton onClick={userLogin}>Login</LoginButton>
            <Typography>OR</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccount onClick={toggleForm}>
              New to Flipkart? Create account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter Firstname"
              name="firstname"
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              label="Enter Lastname"
              name="lastname"
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              label="Enter Username"
              name="username"
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              label="Enter Email"
              name="email"
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              label="Enter Password"
              name="password"
              onChange={handleInputChange}
            />
            <TextField
              variant="standard"
              label="Enter Phone"
              name="phone"
              onChange={handleInputChange}
            />
            <LoginButton onClick={userSignup}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
