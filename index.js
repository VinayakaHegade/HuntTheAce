const cardObjDefinitions = [
  { id: 4, imagePath: "/images/card-AceSpades.png", alt: "card-AceSpades" },
  { id: 2, imagePath: "/images/card-JackClubs.png", alt: "card-JackClubs" },
  { id: 1, imagePath: "/images/card-KingHearts.png", alt: "card-KingHearts" },
  {
    id: 3,
    imagePath: "/images/card-QueenDiamonds.png",
    alt: "card-QueenDiamonds",
  },
];

const cardBackImgPath = "/images/card-back-Blue.png";
const cardContainerElem = document.querySelector("card-container");

/* <div class="card">
  <div class="card-inner">
    <div class="card-front">
      <img
        src="/images/card-JackClubs.png"
        alt="card-JackClubs"
        class="card-img"
      />
    </div>
    <div class="card-back">
      <img
        src="/images/card-back-Blue.png"
        alt="card-back-Blue"
        class="card-img"
      />
    </div>
  </div>
</div>; */

createCards();

function createCards() {
  cardObjDefinitions.forEach((cardItem) => {
    // console.log("inside")
    createCard(cardItem);
  });
}

function createCard(cardItem) {
  // creating all div elements required to make a card
  const cardElem = createElement("div");
  const cardInnerElem = createElement("div");
  const cardFrontElem = createElement("div");
  const cardBackElem = createElement("div");

  // creating front and back img elements for the card
  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");

  // adding class and id to card element
  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);

  // adding class to inner card element
  addClassToElement(cardInnerElem, "card-inner");

  // adding class to front card element
  addClassToElement(cardFrontElem, "card-front");

  // adding class to back card element
  addClassToElement(cardBackElem, "card-back");
  
  // adding src attribute and appropriate value to img back element
  addAttributeToImageElem(cardBackImg, cardBackImgPath, "card-back-blue");
  
  // adding src attribute and appropriate value to img front element
  addAttributeToImageElem(cardFrontImg, cardItem.imagePath, cardItem.alt);
  
  // adding class to front and back img element
  addClassToElement(cardFrontImg, "card-img");
  addClassToElement(cardBackImg, "card-img");

  // appending img elements as child element to card front and back div elements
  addChildElementToParent(cardFrontElem, cardFrontImg);
  addChildElementToParent(cardBackElem, cardBackImg);

  // appending card front and back div elements as child to card inner div element
  addChildElementToParent(cardInnerElem, cardFrontElem);
  addChildElementToParent(cardInnerElem, cardBackElem);

  // appending card inner div element as child to card div element
  addChildElementToParent(cardElem, cardInnerElem);

  // add card element as child element to appropriate grid cell
  addCardToGridCell(cardElem);
}

function createElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}

function addAttributeToImageElem(imgElem, src, alt) {
  imgElem.src = src;
  imgElem.alt = alt;
}

function addChildElementToParent(parentElem, childElem) {
  parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
  const cardPositionClassName = mapCardToGridCell(card);
  const cardPositionElem = document.querySelector(cardPositionClassName);
  //   console.log(cardPositionElem);
  //   console.log(card);
  addChildElementToParent(cardPositionElem, card);
}

function mapCardToGridCell(card) {
  if (card.id == 1) {
    return ".card-pos-a";
  } else if (card.id == 2) {
    return ".card-pos-b";
  } else if (card.id == 3) {
    return ".card-pos-c";
  } else if (card.id == 4) {
    return ".card-pos-d";
  }
}
