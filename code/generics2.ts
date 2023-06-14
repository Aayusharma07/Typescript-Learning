interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

// (async () => {
//   const post = await fetchPostData("/posts");
//   const user = await fetchUserData("/users");
//   const users = await fetchData<IUser>("/posts");
//   console.log(post, user, users);
// })();
