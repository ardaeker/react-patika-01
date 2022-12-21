import axios from "axios";

export default async function getData(Number) {
  const getUser = new Promise(async (resolve, reject) => {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${Number}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "*",
        },
      }
    );
    resolve(user);
  });

  const getPosts = new Promise(async (resolve, reject) => {
    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${Number}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "*",
        },
      }
    );
    resolve(posts);
  });

  Promise.all([getUser, getPosts]).then((values) => {
    console.log({ ...values[0], posts: [...values[1]] });
  });
}
