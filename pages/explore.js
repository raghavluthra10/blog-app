import React, { useEffect, useState } from "react";
import client from "@/apollo-client";
import { signIn, signOut, getSession } from "next-auth/react";
import Page from "@/components/Page";
import PageLayout from "@/layouts/PageLayout";
import If from "@/components/If";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import Spinner from "@/components/Spinner";
import BlogPost from "@/components/BlogPost";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";

const GET_FAKE_DATA = gql`
  query GetFakeData {
    getFakeData {
      userId
      id
      thumbnail
    }
  }
`;
const Explore = (props) => {
  console.log("session =>", props);

  const [getFateDataOnDemand, { loading, error, data }] =
    useLazyQuery(GET_FAKE_DATA);

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

  // console.log("fake data =>", fakeData);
  const details = (e, id) => {
    console.log(e, id);
  };

  const fetchAgain = () => {
    console.log("fetchAgain");
    getFateDataOnDemand();
  };

  return (
    <Page className="pt-24 flex flex-col items-center ">
      <div className=" flex justify-between items-center	mb-16 w-72 tab:w-112 largeMobile:w-104 mobile:w-96   ">
        <div className="flex items-center	">
          {/* name and photo will be inline */}
          <Avatar
            className="mr-4"
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          />
          <span>Raghav Luthra</span>
        </div>
        {/* this button will redirect to "addBlogPage" */}
        <Button border={true} onClick={fetchAgain}>
          New Blog
        </Button>
      </div>
      <If condition={data?.getFakeData?.length > 0}>
        {data?.getFakeData?.map((d) => {
          return (
            <>
              <div className="mb-16 flex flex-col items-center		">
                <BlogPost
                  key={d.id}
                  // thumbnail={d.thumbnail}
                  thumbnail="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                  title={d.userId}
                  onClick={(e) => details(e, d.id)}
                />
              </div>
              <div className="mb-16 flex flex-col items-center		">
                <BlogPost
                  key={d.id}
                  thumbnail={d.thumbnail}
                  // thumbnail="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
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
