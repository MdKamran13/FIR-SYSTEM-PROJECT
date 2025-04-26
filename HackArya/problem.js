// Extract problem from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const problem = urlParams.get('problem');

// Map of problems with their descriptions
const problemDetails = {
    'lost-items': {
        title: 'Lost Items',
        description: 'Lost mobile phones, wallets, ID cards, etc. You can report them and follow up with the police.'
    },
    'noise-complaint': {
        title: 'Noise Complaints',
        description: 'For loud disturbances in neighborhoods, you can file a complaint.'
    },
    'parking-issues': {
        title: 'Parking Issues',
        description: 'Wrong parking can be solved through municipal complaints, no FIR needed.'
    },
    'verbal-disputes': {
        title: 'Verbal Disputes',
        description: 'Minor verbal conflicts can be resolved without the need for an FIR.'
    }
};

// Set the problem title and description
document.getElementById('problem-title').textContent = problemDetails[problem]?.title || 'Unknown Problem';
document.getElementById('problem-description').textContent = problemDetails[problem]?.description || 'No description available for this problem.';

// Handle form submission for the report
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const aadhar = document.getElementById('aadhar').value;
    const phone = document.getElementById('phone').value;
    const pan = document.getElementById('pan').value;
    const address = document.getElementById('address').value;
    const incidentDetails = document.getElementById('incidentDetails').value;

    if (name && fatherName && aadhar && phone && pan && address && incidentDetails) {
        alert('Report submitted successfully!');
        document.getElementById('reportForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
