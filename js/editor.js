// editor.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ChemDoodle Web Components
    let viewerCanvas = new ChemDoodle.ViewerCanvas('molecule-editor', 500, 300);
    
    // Configure canvas settings
    viewerCanvas.specs.backgroundColor = '#1a1a24';
    viewerCanvas.specs.bonds_width_2D = 1.6;
    viewerCanvas.specs.bonds_saturationWidth_2D = 2.6;
    viewerCanvas.specs.bonds_hashSpacing_2D = 2.5;
    viewerCanvas.specs.atoms_font_size_2D = 10;
    viewerCanvas.specs.atoms_font_families_2D = ['Arial', 'sans-serif'];
    viewerCanvas.specs.atoms_useJMOLColors = true;

    // Make canvas responsive
    function resizeCanvas() {
        const container = document.querySelector('.editor-container');
        const width = container.clientWidth - 40; // Adjust for padding
        const height = Math.min(300, width * 0.6);
        viewerCanvas.resize(width, height);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Handle editor controls
    document.getElementById('clear-canvas').addEventListener('click', () => {
        viewerCanvas.clear();
    });

    document.getElementById('generate-route').addEventListener('click', async () => {
        const resultsSection = document.getElementById('results-section');
        const loadingSpinner = document.getElementById('loading-spinner');
        const resultsContainer = document.getElementById('results-container');

        try {
            // Show loading state
            resultsSection.classList.remove('hidden');
            loadingSpinner.classList.remove('hidden');
            resultsContainer.innerHTML = '';

            // Get SMILES from canvas
            const mol = viewerCanvas.getMolecule();
            const smiles = ChemDoodle.writeMOL(mol);

            // Here you would make an API call to your retrosynthesis service
            // For now, we'll simulate a delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Example response
            const synthesisPlan = {
                steps: [
                    {
                        step: 1,
                        description: "Example synthesis step 1",
                        reagents: ["Reagent A", "Reagent B"],
                        conditions: "Heat to 80°C for 2 hours"
                    }
                ]
            };

            // Display results
            resultsContainer.innerHTML = `
                <h3>Synthesis Plan</h3>
                ${synthesisPlan.steps.map(step => `
                    <div class="synthesis-step">
                        <h4>Step ${step.step}</h4>
                        <p>${step.description}</p>
                        <p>Reagents: ${step.reagents.join(', ')}</p>
                        <p>Conditions: ${step.conditions}</p>
                    </div>
                `).join('')}
            `;

        } catch (error) {
            resultsContainer.innerHTML = `
                <div class="error-message">
                    Error generating synthesis plan. Please try again.
                </div>
            `;
        } finally {
            loadingSpinner.classList.add('hidden');
        }
    });

    // Handle export buttons
    document.getElementById('export-pdf').addEventListener('click', () => {
        // Implement PDF export functionality
        alert('PDF export functionality coming soon!');
    });

    document.getElementById('save-route').addEventListener('click', () => {
        // Implement save functionality
        alert('Save functionality coming soon!');
    });
});
