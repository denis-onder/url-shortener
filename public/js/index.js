const $ = id => document.getElementById(id);
const output = $("hero_output");
const input = $("hero_input");

async function handler() {
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
    input.value = "";
    output.classList.add("revealed");
    output.value = `${window.location}${id}`;
    output.addEventListener("click", copy);
  }
}

function copy() {
  output.select();
  output.setAttribute("disabled", "");
  document.execCommand("copy");
  alert("Copied the text: " + output.value);
  window.getSelection().empty();
  setTimeout(() => {
    output.classList.remove("revealed");
    output.removeAttribute("disabled");
  }, 2500);
}

$("hero_btn").addEventListener("click", handler);
