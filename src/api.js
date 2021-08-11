export const getPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Neeraj won gold",
        },
        {
          id: 2,
          title:
            "12th results announced. Many people happy, some people depressed!",
        },
        {
          id: 3,
          title: "Tokyo olympics end. india won 1 gold 2 silver 5 bronze.",
        },
        {
          id: 4,
          title: "Pegasus snooping.",
        },
        {
          id: 5,
          title: "600 millions of cryptocurrencies stolen.",
        },
      ]);
    }, 2000);
  });
};
