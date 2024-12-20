const { createClient } = require('redis');

async function connectRedis() {
    const client = createClient({
        host: '127.0.0.1',
        port: 6379
    });

    client.on('connect', () => {
        console.log('Connected to Redis');
    });

    client.on('error', (err) => {
        console.log('Redis client not connected to the server:', err);
    });

    await client.connect();

    // Set a value in Redis
    await client.set('my_key', 'Hello, Redis!');
    console.log('Set operation: OK');

    // Get a value from Redis
    const value = await client.get('my_key');
    console.log('Get operation:', value); // Output: Hello, Redis!
// const redis = require('redis')
import redis from 'redis'

const client  = redis.createClient()

client.on('ready', () => {
    console.log('Redis client connected to the server')
})

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`)
})


function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, reply) => {
        redis.print(`Reply: ${reply}`)
    })
}

function displaySchoolValue(schoolName) {
    client.get(schoolName, (err, reply) => {
        console.log(reply)
    })
}


displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
    // Close the client after operations are done
    await client.quit();
}

connectRedis().catch(console.error);
