import { Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SidebarMenu = styled.div`
  margin-left: 25px;
`;

const StyledHeader3 = styled.h3`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 120%;
  margin: 0px 0px 27px 0px;
  color: #133a4b;
`;

const SideMenuButton = styled.button<{ page: String }>`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  line-height: 25px;
  width: 279px;
  height: 48px;
  border: none;
  border-radius: 12px;
  vertical-align: middle;
  padding-left: 16px;
  margin-left: -14px;
  background: ${(props) =>
    props.page === props.name ? "#026896" : "transparent"};
  color: ${(props) => (props.page === props.name ? "#ffffff" : null)};
  :hover {
    cursor: pointer;
  }
  p {
    margin: 0;
    line-height: 48px;
  }
`;

const ProfileSide = () => {
  //   const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState("Login Details");
  return (
    <SidebarMenu>
      <StyledHeader3>Profile</StyledHeader3>
      <Grid container>
        <Grid item xs={12}>
          <SideMenuButton
            name="Login Details"
            page={page}
            onClick={(e) => setPage("Login Details")}
          >
            <p>Login Details</p>
          </SideMenuButton>
        </Grid>
        <Grid item xs={12}>
          <SideMenuButton
            name="Organization Details"
            page={page}
            onClick={(e) => setPage("Organization Details")}
          >
            <p>Organization Details</p>
          </SideMenuButton>
        </Grid>
      </Grid>
    </SidebarMenu>
  );
};

export default ProfileSide;
