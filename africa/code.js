var mapName = document.getElementById("map");
var clickText = document.getElementById("clickText");
var options = [];
var ids = [];
var randomOpt;

if (mapID === "bhGovernorates") {
  options = ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"];
  ids = ["capitalGovernorate","muharraqGovernorate","northernGovernorate","southernGovernorate"];
}
ids = ids.map(id => mapName.contentDocument.getElementById(id));
randomOpt = options[Math.floor(Math.random()*ids.length)];
clickText.innerHTML = `Click on ${randomOpt}`;

ids.forEach(id => {
  id.addEventListener('mouseover', () => {
    id.style.fill = "#FFFFEF";
    id.style.cursor = "pointer";
  });
  id.addEventListener('mouseout', () => {
    id.style.fill = "#FFFFEA";
    id.style.cursor = "auto";
  });
  id.addEventListener('mousedown', () => {
    if (options.indexOf(randomOpt) !== ids.indexOf(id)) {
      console.log("Wrong");
    }
  });
});
