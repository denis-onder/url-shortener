function checkURL(url) {
  if (!url.includes("https://")) return `https://${url}`;
}

const loop = async () => {
  await [0, 1, 2, 3, 4].forEach(i => {
    (() =>
      setTimeout(() => {
        document.getElementById(`square${i}`).style.backgroundColor = "#000";
        if (i === 4)
          setTimeout(() => {
            window.location.href = checkURL(
              document.getElementById("url").innerText
            );
          }, 1000);
      }, i * 1000))(i);
  });
};
window.onload = loop;
