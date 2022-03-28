import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home page">
      <Typography variant="h1" color="primary">
        Home page
      </Typography>
    </Layout>
  );
};

export default HomePage;
