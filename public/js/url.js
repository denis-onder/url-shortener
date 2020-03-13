function checkURL(url) {
  if (!url.includes("https://")) {
    return `https://${url}`;
  } else {
    return url;
  }
}

const loop = async () => {
  const squares = document.querySelectorAll(".square");
  await squares.forEach((square, i) => {
    (() =>
      setTimeout(() => {
        square.style.backgroundColor = "#000";
        if (i === squares.length - 1)
          setTimeout(() => {
            window.location.href = checkURL(
              document.getElementById("url").innerText
            );
          }, 1000);
      }, i * 1000))(i);
  });
};
window.onload = loop;
