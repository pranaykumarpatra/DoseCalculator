const conversionFactors = {
    human: { dog: 0.32, monkey: 0.16, cat: 0.076, rabbit: 0.07, gpig: 0.031, rat: 0.018, mouse: 0.0026 },
    dog: { human: 3.1, monkey: 0.52, cat: 0.24, rabbit: 0.22, gpig: 0.1, rat: 0.06, mouse: 0.008 },
    monkey: { human: 6.1, dog: 1.9, cat: 0.45, rabbit: 0.42, gpig: 0.19, rat: 0.11, mouse: 0.016 },
    cat: { human: 13, dog: 4.1, monkey: 2.2, rabbit: 0.92, gpig: 0.41, rat: 0.23, mouse: 0.03 },
    rabbit: { human: 14.2, dog: 4.5, monkey: 2.4, cat: 1.08, gpig: 0.44, rat: 0.25, mouse: 0.04 },
    gpig: { human: 31.3, dog: 10.2, monkey: 5.2, cat: 2.4, rabbit: 2.25, rat: 0.57, mouse: 0.08 },
    rat: { human: 56.0, dog: 17.8, monkey: 9.2, cat: 4.2, rabbit: 3.9, gpig: 1.74, mouse: 0.14 },
    mouse: { human: 387.9, dog: 124.2, monkey: 64.1, cat: 29.7, rabbit: 27.8, gpig: 12.25, rat: 7 }
};

const speciesSelect = document.getElementById('species');
const doseInput = document.getElementById('dose');
const resultsDiv = document.getElementById('results');

function updateResults() {
    const species = speciesSelect.value;
    const dose = parseFloat(doseInput.value);

    resultsDiv.innerHTML = ''; // Clear previous results

    if (!species || isNaN(dose)) {
        resultsDiv.innerHTML = '<p>Please select a species and enter a valid dose.</p>';
        return;
    }

    const factors = conversionFactors[species];

    for (const [targetSpecies, factor] of Object.entries(factors)) {
        const convertedDose = (dose * factor).toFixed(2);
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <span>${targetSpecies.toUpperCase()}</span>
            ${convertedDose} mg
        `;
        resultsDiv.appendChild(resultItem);
    }
}

// Add event listeners
speciesSelect.addEventListener('change', updateResults);
doseInput.addEventListener('input', updateResults);
