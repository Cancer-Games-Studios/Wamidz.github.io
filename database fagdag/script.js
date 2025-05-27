fetch("Data.json")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#students tbody");
        data.forEach((student, index) => {
            const row = document.createElement("tr");
            console.log(data[0]);
            
            // Image cell (using index+1 for unique filenames: image1.png, image2.png, etc.)
            const imgCell = document.createElement("td");
            const img = document.createElement("img");
            img.src = `images/image${index + 1}.png`;
            img.alt = `${student.namn}'s profile`;
            
            // Fallback if image fails to load
            img.onerror = () => {
                img.src = 'images/default.png'; // Make sure this exists
                console.warn(`Missing image for ${student.namn}`);
            };
            
            img.classList.add("profile-img");
            imgCell.appendChild(img);
            row.appendChild(imgCell);

            // Add other student data
            ['namn', 'etternamn', 'alder', 'klasse', 'email'].forEach(key => {
                const cell = document.createElement("td");
                cell.textContent = student[key];
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error("Error:", error));