const { createClient } = require('redis');

const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.log('Redis client not connected to the server:', err);
});

(async () => {
    await client.connect();
})();

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (_err, reply) => {
        console.log(`Reply: ${reply}`);
    });
};

function displaySchoolValue(schoolName) {
    client.get(schoolName, (_err, reply) => {
        console.log(reply)
    });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
