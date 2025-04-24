function Save() {
    const lenders = document.getElementById("nakautangs");
    const name = document.getElementById("name").value.trim();
    const amount = document.getElementById("hm").value.trim();

    // Don't add empty fields
    if (name === "" || amount === "") {
        alert("Eguls tayo diyan pards, dat may laman yung dalawang box.")
        return;
    }

    const newUtang = document.createElement("li");
    newUtang.textContent = name + " - ₱" + amount;
    lenders.appendChild(newUtang);

    // Clear the inputs after saving
    document.getElementById("name").value = "";
    document.getElementById("hm").value = "";
};