const $ = id => document.getElementById(id);

async function handler() {
  const input = $("hero_input");
  const res = await fetch("/api/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: input.value })
  });
  const { error, id } = await res.json();
  if (error) {
    console.error(error);
  } else {
    console.log(id);
  }
}

$("hero_btn").addEventListener("click", handler);
