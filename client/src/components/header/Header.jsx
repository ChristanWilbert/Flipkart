import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const logoUrl =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
        <Box>
          <img src={logoUrl} alt="logo" style={{ width: 80 }} />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
