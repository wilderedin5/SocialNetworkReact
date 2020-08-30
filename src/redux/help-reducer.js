let initialState = {
  helpQA: [
    {
      id: 1,
      questionTitle: "What is Adobe Flash Player?",
      answer:
        "Adobe Flash Player is a special application that allows you to watch videos, listen to music, and make calls on websites.",
    },
    {
      id: 2,
      questionTitle: "What is like?",
      answer:
        "Like is a popular online way to show your approval of a record, photo, article, video, or any other material. You don't have to write anything, just click on a special icon under the content you like, which is most often drawn with a heart or a thumbs up. Next to the icon is usually a number that shows the total number of collected likes.",
    },
    {
      id: 3,
      questionTitle: "What is repost?",
      answer:
        "Repost — the ability to share someone else's post on your page in a social network, leaving it in its original form with the link to the original source. Repost, or repost, as this technique is also called, is present in almost all social networks, being one of the main ways to exchange information.",
    },
    {
      id: 4,
      questionTitle: "What is social network?",
      answer:
        "A social network is an online platform that people use for communication, Dating, creating social relationships with other people who have similar interests or offline connections, as well as entertainment and work.",
    },
    {
      id: 5,
      questionTitle: "What is Facebook?",
      answer:
        "Facebook is the largest social network in the world and the company that owns it. It was founded on February 4, 2004 by mark Zuckerberg and his roommates while studying at Harvard University-Eduardo Saverin, Dustin Moskowitz and Chris Hughes.",
    },
    {
      id: 6,
      questionTitle: "What is Twitter?",
      answer:
        "Twitter is a social network for public messaging via a web interface, SMS, instant messaging, or third-party client programs for Internet users of any age. The publication of short notes in the blog format was called",
    },
    {
      id: 7,
      questionTitle: "What is SEO?",
      answer:
        "Search engine optimization — a set of measures for internal and external optimization to raise the site's position in search engine results for certain user queries, in order to increase network traffic and potential customers and then monetize this traffic.",
    },
  ],
  contacts: [
    {
      id: 1,
      name: "Ivan Popov",
      status: "Director",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "For all questions",
    },
    {
      id: 2,
      name: "Ivan Popov",
      status: "IT-specialist",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "For IT questions",
    },
    {
      id: 3,
      name: "Ivan Popov",
      status: "top manager",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "Manage not managed, can sell a handle",
    },
    {
      id: 4,
      name: "Ivan Popov",
      status: "React prog",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description: "For questions about React",
    },
    {
      id: 5,
      name: "Ivan Popov",
      status: "HR",
      phone: "89307041240",
      email: "wildnefalem5@gmail.com",
      description:
        "It will be cool if you don't ask a question about the future in 5 years",
    },
  ],
};

const helpReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default helpReducer;
