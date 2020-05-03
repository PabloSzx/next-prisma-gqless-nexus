import { getArrayAccessorFields } from "gqless-hooks";
import { GetServerSideProps, NextPage } from "next";

import { prepareQuery, useQuery } from "@src/graphql";

const UsersQuery = prepareQuery({
  cacheId: "users",
  query({ users }) {
    return getArrayAccessorFields(users, "id", "email", "name", "role");
  },
});

interface UserListProps {
  users: typeof UsersQuery.dataType;
}

export const getServerSideProps: GetServerSideProps<UserListProps> = async () => {
  const users = await UsersQuery.prepare({
    checkCache: false,
  });

  return {
    props: {
      users,
    },
  };
};

const IndexPage: NextPage<UserListProps> = (props) => {
  UsersQuery.useHydrateCache(props.users);

  const [{ data: users }] = useQuery(UsersQuery.query, {
    sharedCacheId: UsersQuery.cacheId,
  });
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {JSON.stringify(users, null, 2)}
    </div>
  );
};

export default IndexPage;
