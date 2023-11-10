import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import LoginDialog from "../login/LoginDialog";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600px;
  height: 32px;
  &:hover {
    color: #ffffff;
  }
`;

const CustomButtons = () => {
  const { user, setUser } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setUser(null);
    handleClose();
  };
  return (
    <Wrapper>
      {user ? (
        <LoginButton
          style={{ backgroundColor: "transparent", color: "white" }}
          aria-controls={openMenu ? "Logout-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          {user}
        </LoginButton>
      ) : (
        <LoginButton
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Login
        </LoginButton>
      )}
      <Menu
        id="Logout-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "Logout-button",
        }}
      >
        <MenuItem onClick={handleLogout} style={{ color: "red" }}>
          Logout
        </MenuItem>
      </Menu>
      <Typography width={135}>Become a Seller</Typography>
      <Typography>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
