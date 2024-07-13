document.addEventListener('DOMContentLoaded', () => {
    const vapeData = [
        {
            id: 1,
            name: "VMATE E",
            model: "12XD",
            color: "black"
        },
        {
            id: 2,
            name: "ursa baby",
            model: "12XD",
            color: "grey"
        },
        {
            id: 3,
            name: "drag nano 2",
            model: "12XD",
            color: "sky blue"
        },
        {
            id: 4,
            name: "argus p1",
            model: "12XD",
            color: "black"
        }
    ];

    // Ensure all elements are loaded before accessing them
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdown = document.getElementById("dropdown");
    const dropdownSelect = document.getElementById("dropdownSelect");
    const searchInput = document.getElementById("search");
    const filterBtn = document.getElementById("filterBtn");
    const container = document.getElementById("container");

    // Check if elements are found in the DOM
    if (dropdownBtn && dropdown && dropdownSelect && searchInput && filterBtn && container) {
        // Event listener for dropdown button click
        dropdownBtn.addEventListener('click', () => {
            console.log("HERERHERE",dropdown.classList)
            dropdown.classList.toggle('show');
        });

        // Function to filter vape data
        function filterVapeData(filter) {
            console.log(filter)
            let filteredData = vapeData;

            const searchText = searchInput.value.toLowerCase().trim();
            
            if (searchText && filter !== "all") {
              filteredData = filteredData.filter((vape) =>
                vape[filter].toLowerCase().includes(searchText)
              );
            } else {
              filteredData = filteredData.filter(
                (vape) =>
                  vape["name"].toLowerCase().includes(searchText) ||
                  vape.color.toLowerCase().includes(searchText) ||
                  vape.model.toLowerCase().includes(searchText)
              );
            }

            populateVapeData(filteredData);
        }

        // Function to populate vape data
        function populateVapeData(data) {
            // Clear any existing content in the container
            container.innerHTML = '';

            // Iterate through the vapeData array
            data.forEach(vape => {
                // Create a new div element for each vape item
                const div = document.createElement('div');
                div.className = 'item'; // Set class name for styling purposes

                // Construct the inner HTML for the vape item
                div.innerHTML = `
                    <h3>${vape.name}</h3>
                    <p>Model: ${vape.model}</p>
                    <p>Color: ${vape.color}</p>
                `;

                // Append the created div to the container
                container.appendChild(div);
            });
        }

        // Initial population of vape data
        populateVapeData(vapeData);

        // Event listener for Filter button
        filterBtn.addEventListener('click', () => {
            const filter = dropdownSelect.value;
            filterVapeData(filter);
        });

        // Event listener for dropdown change
        dropdownSelect.addEventListener('change', () => {
            filterVapeData(dropdownSelect.value);
        });

    } else {
        console.error("One or more elements not found in the document.");
    }
});
