const urlParams = new URLSearchParams(window.location.search);
const thebrandfromURL = urlParams.get("brandname");

fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //We have the data
    //console.log(data);
    handleData(data);
  })
  .catch((e) => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
  });

function handleData(data) {
  data.forEach(showBrand);
}

function showBrand(onebrand) {
  const firstLetter = onebrand.brandname.charAt(0).toLowerCase();
  const templ = document.querySelector("#linkTemplate").content;
  console.log(onebrand);
  const cp = templ.cloneNode(true);

  cp.querySelector("a").textContent = onebrand.brandname;
  cp.querySelector("a").href += onebrand.brandname;
  //   const parent = document.querySelector("ol");
  const parent = document.querySelector(`#letter_${firstLetter}`);
  parent.appendChild(cp);
}

const sectEl = document.createElement("section");
sectEl.classList.add("letterGroup");

// .charAt(0).toLowerCase;
