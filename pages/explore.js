import React from "react";
import client from "@/apollo-client";
import { signIn, signOut, getSession } from "next-auth/react";
import Page from "@/components/Page";
import PageLayout from "@/layouts/PageLayout";
import If from "@/components/If";
import { gql, useQuery } from "@apollo/client";
import Spinner from "@/components/Spinner";
import BlogPost from "@/components/BlogPost";

const GET_FAKE_DATA = gql`
  query GetFakeData {
    getFakeData {
      userId
      id
      thumbnail
    }
  }
`;
const Explore = ({ session }) => {
  const { loading, error, data } = useQuery(GET_FAKE_DATA);

  if (error) {
    console.log(error.message);
    return <Page className="p-10">Some error occured</Page>;
  }

  if (loading) {
    return (
      <Page className="p-44">
        <Spinner />
      </Page>
    );
  }

  console.log(data.getFakeData);
  const details = (e, id) => {
    console.log(e, id);
  };

  return (
    <Page className="pt-24">
      <If condition={data?.getFakeData?.length > 0}>
        {data?.getFakeData?.map((d) => {
          return (
            <>
              <div className="mb-16 flex flex-col items-center		">
                <BlogPost
                  key={d.id}
                  thumbnail={d.thumbnail}
                  title={d.userId}
                  onClick={(e) => details(e, d.id)}
                />
              </div>
            </>
          );
        })}
      </If>
    </Page>
  );
};

export default Explore;

Explore.getLayout = PageLayout;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   return {
//     props: { session },
//   };
// }
