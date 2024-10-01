const { v4: uuidv4 } = require("uuid");

function generateDeck() {
  const CardImg = {
    cat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiW_OILei2PsYLCK0hJ2odQzqwvsVHJdrrpNHUcxcC9m26x38L7llOunRyin59_GCr744&usqp=CAU",
    defuseCat:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbq7rlhXSrz9TjPoAiw1bXvXfEiY7XtClzXbwf3YkKQ_D37WmxCkkp_75yCqEDibvYTU&usqp=CAU",
    bombCat:
      "https://ih1.redbubble.net/image.5073044842.6383/st,small,507x507-pad,600x600,f8f8f8.jpg",
    shuffle:
      "https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-21-512.png",
  };

  const defaultData = [
    { img: CardImg.cat, type: "cat", flipped: false },
    { img: CardImg.defuseCat, type: "defuseCat", flipped: false },
    { img: CardImg.shuffle, type: "shuffle", flipped: false },
    { img: CardImg.bombCat, type: "bombCat", flipped: false },
  ];

  // Create a deck by randomly picking from defaultData
  return Array.from({ length: 5 }, () => {
    const randomIdx = Math.floor(Math.random() * defaultData.length);
    return { ...defaultData[randomIdx], id: uuidv4() }; // Use uuidv4 to generate unique IDs
  });
}

module.exports = { generateDeck };
