import { Box, Typography } from "@mui/material";
import { navData } from "../../constants/data";
import styled from "@emotion/styled";

const Component = styled(Box)`
  display: flex;
  margin: 1px 125px;
  justify-content: space-between;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Box padding={2} style={{ textAlign: "center" }} key={data.id}>
          <img src={data.url} alt="img" height={50} />
          <Typography fontSize={14}>{data.text}</Typography>
        </Box>
      ))}
    </Component>
  );
};

export default NavBar;
