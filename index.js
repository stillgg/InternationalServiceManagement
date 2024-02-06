const API_KEY = "42241498-1835a156065dd157f68f10e32";

const imageContainer = document.querySelector(".images");

const calcHeight = (width, height) => {
  return `${(height * 100) / width / 2}%`;
};

const loadImages = async () => {
  const data = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`
  ).then((res) => res.json());

  const content = data.hits
    .map(({ webformatURL, webformatHeight, webformatWidth }, index) => {
      const side = index % 2 === 0 ? "left" : "right";
      const height = calcHeight(webformatWidth, webformatHeight);

      return `<img class='img ${side}' src='${webformatURL}' width='${webformatWidth}' height='${webformatHeight}' style="height:${height}" />`;
    })
    .join("");

  imageContainer.innerHTML = content;
  const images = document.querySelectorAll(".img");

  setTimeout(() => {
    images.forEach((image) => image.classList.add("active"));
  }, 500);
};

loadImages();
