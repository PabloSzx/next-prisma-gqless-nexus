import { GetServerSideProps, NextPage } from "next";

import { PrismaClient, User } from "@prisma/client";

interface IndexProps {
  users: User[];
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const prisma = new PrismaClient();

  const users = await prisma.user
    .findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    })
    .finally(() => {
      prisma.disconnect();
    });
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
