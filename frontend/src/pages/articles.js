import React, { useState, useEffect } from "react";

import Article from "components/article/article";
import useFetch from "hooks/useFetch";
import Loading from "components/loading";
import MessageError from "components/messageError";

const Articles = () => {
  const [d, setD] = useState(false);
  const apiUrl = "/a/articles";
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, []);

  useEffect(() => {
    if (!response) {
      return;
    }
    console.log("get articles response", response);
    setD(true);
  }, [response]);

  if (isLoading || !response) {
    return <Loading />;
  }
  if (error) {
    return <MessageError mes={error} />;
  }
  if (!d) return null;
  return (
    <div>
      {response.articlesCount && <Article articles={response.articles} />}
    </div>
  );
};

export default Articles;
