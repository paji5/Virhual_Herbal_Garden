let questions = [
    {
      numb: '#',
      question: "What is the other name of Sida Cordifolia?",
      answer: "Country Mallow",
      options: [
        "Country Mallow",
        "Bala",
        "Cardamon",
        "Turmeric"
      ]
    },
    {
      numb:'#',
      question: "What is the advantage of Aloe Vera?",
      answer: "Digestive Aid",
      options: [
        "Digestive Aid",
        "Allergic Reactions",
        "Skin Sensitivity",
        "Laxative Effect"
      ]
    },
    {
      numb: '#',
      question: "Which herb improves menstrual health?",
      answer: "Nirgundi",
      options: [
        "Cardamom",
        "Shatavari",
        "Nirgundi",
        "Shiguri"
      ]
    },
    {
      numb:'#',
      question: "Which herb is commonly used for treating cold and cough?",
      answer: "Tulsi",
      options: [
        "Tulsi",
        "Ashwagandha",
        "Aloe Vera",
        "Lavender"
      ]
    },
    {
      numb:'#',
      question: "Which herb is known for its anti-inflammatory properties?",
      answer: "Turmeric",
      options: [
        "Basil",
        "Turmeric",
        "Ginger",
        "Sage"
      ]
    },
    {
      numb:'#',
      question: "Which herb is used to promote relaxation and reduce stress?",
      answer: "Chamomile",
      options: [
        "Lavender",
        "Chamomile",
        "Peppermint",
        "Ginseng"
      ]
    },
    {
      numb:'#',
      question: "Which herb is often used to improve memory and cognitive function?",
      answer: "Ginkgo Biloba",
      options: [
        "Ginseng",
        "Ginkgo Biloba",
        "Basil",
        "St. John's Wort"
      ]
    },
    {
      numb:'#',
      question: "Which herb is commonly used for digestive issues and reducing bloating?",
      answer: "Peppermint",
      options: [
        "Cinnamon",
        "Peppermint",
        "Fennel",
        "Rosemary"
      ]
    },
    {
      numb:'#',
      question: "Which herb is a natural remedy for insomnia?",
      answer: "Lavender",
      options: [
        "Lavender",
        "Valerian Root",
        "Peppermint",
        "Chamomile"
      ]
    },
    {
      numb:'#',
      question: "Which herb is used for boosting immunity?",
      answer: "Echinacea",
      options: [
        "Ashwagandha",
        "Echinacea",
        "Tulsi",
        "Licorice"
      ]
    }
  ];
  
  // Shuffle function to randomize the questions order
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }
  
  // Shuffle the questions array
  shuffleArray(questions);
  
  // The questions are now shuffled and can be used in your quiz
  console.log(questions); // Check the shuffled questions
  