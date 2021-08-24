export let navList = [
  { id: "1", title: "Home" },
  { id: "2", title: "Take the Test" },
];

export const getQuestionsData = (url) => {
  const results = fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return results;
};
