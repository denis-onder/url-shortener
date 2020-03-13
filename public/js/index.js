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
    output.classList.add("error");
    output.value = error;
    output.setAttribute("disabled", "");
    setTimeout(() => {
      output.classList.remove("error");
      output.removeAttribute("disabled");
      output.value = "";
    }, 2500);
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
  output.value = "Copied to clipboard!";
  window.getSelection().empty();
  setTimeout(() => {
    output.classList.remove("revealed");
    output.removeAttribute("disabled");
    output.value = "";
  }, 2500);
}

$("hero_btn").addEventListener("click", handler);
