const { createClient } = require('redis');

const client = createClient();

client.on('connect', () => {
    console.log('you have connected successfully.');
});

client.on('error', (err) => {
    console.error("failed to connect:", err);
});

client.hSet('HolbertonSchools', 'Portland', 50, 'Seattle', 80, 'New York', 20, 'Bogota', 20, 'Cali', 40, 'Paris', 2, (err, reply) => {
    if (err) {
        console.error('Error setting hash:', err);
    } else {
        console.log('Hash set reply:', reply);
    }
});

client.hgetall('HolbertonSchools', (err, reply) => {
    if (err) {
        console.error('Error getting hash:', err);
    } else {
        console.log('HolbertonSchools:', reply);
    }
});
