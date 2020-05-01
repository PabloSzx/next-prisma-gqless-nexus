import { GetServerSideProps, NextPage } from "next";

import { User, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IndexProps {
  users: User[];
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const users = await prisma.user.findMany();
  return {
    props: {
      users,
    },
  };
};

const IndexPage: NextPage<IndexProps> = ({ users }) => {
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {JSON.stringify(users, null, 2)}
    </div>
  );
};

export default IndexPage;
