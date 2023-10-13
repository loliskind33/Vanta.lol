const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

// Serve static files (like your HTML and JSON file)
app.use(express.static('public'));

// Endpoint to update the profile
app.post('/updateProfile', (req, res) => {
    const updatedProfile = req.body;

    // Read the existing profile data from the JSON file
    fs.readFile('public/profile.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Error updating profile' });
            return;
        }

        const currentProfile = JSON.parse(data);

        // Update the data
        currentProfile.username = updatedProfile.username;
        currentProfile.bio = updatedProfile.bio;

        // Write the updated data back to the JSON file
        fs.writeFile('public/profile.json', JSON.stringify(currentProfile, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
                res.status(500).json({ error: 'Error updating profile' });
            } else {
                res.status(200).json(currentProfile);
            }
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
