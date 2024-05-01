const suggestions = ["papad", "banana-chips", "chikki", "thecha", "masala"];

function showSuggestions(input) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    if (input.length === 0) {
        suggestionsDiv.style.display = "none";
        return;
    }

    const regex = new RegExp(input, "i");
    const matches = suggestions.filter(suggestion => regex.test(suggestion));

    if (matches.length > 0) {
        matches.forEach(match => {
            const suggestion = document.createElement("div");
            suggestion.textContent = match;
            suggestion.classList.add("suggestion");
            suggestion.onclick = () => selectSuggestion(match);
            suggestionsDiv.appendChild(suggestion);
        });
        suggestionsDiv.style.display = "block";
    } else {
        suggestionsDiv.style.display = "none";
    }
}

function selectSuggestion(suggestion) {
    document.getElementById("searchInput").value = suggestion;
    document.getElementById("suggestions").style.display = "none";

    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            redirectToPage(suggestion);
        }
    });
}

function redirectToPage(suggestion) {
    
    const pageMapping = {
        "papad": "./Sri-papad.html",
        "banana-chips": "./banana.html",
        "chikki": "./Ittha-Chikki.html",
        "thecha": "./Prakash-Kolhapuri-Thecha.html",
        "masala": "./Aaryavrat-Masala.html"
    };
    
    if (pageMapping.hasOwnProperty(suggestion)) {
        window.location.href = pageMapping[suggestion];
    }
}
