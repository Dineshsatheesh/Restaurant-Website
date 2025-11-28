
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function reserveTable() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const people = document.getElementById("people").value;
    const date = document.getElementById("date").value;

    if (!name || !phone || !people || !date) {
        alert("Please fill all details!");
        return;
    }

    document.getElementById("popupMessage").innerText =
        `Name: ${name}\nPhone: ${phone}\nTable for: ${people}\nDate: ${date}`;

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


    