document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name.replace(/([A-Z])/g," $1").trim().toUpperCase(),e.placeholder=e.name.replace(/([A-Z])/g," $1").trim().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}).join(" "),e.parentElement.appendChild(t)})});
//# sourceMappingURL=index.78532acf.js.map
