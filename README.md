# RandomNameGenerator

Generates a random first name from a predefined list of names and sends the name in a response as a JSON object.

Created to function as a microservice. Exposes the endpoint '/name' on PORT 3001 to communicate through HTTP GET requests.

## Getting Started

Make sure you have Node.js and npm already installed.
- `git clone https://github.com/sophlil/RandomNameGenerator.git`
- To install all dependencies, `npm install`. This will automatically install express and [cors](https://www.npmjs.com/package/cors).
- `npm start`

The server should now be running at http://localhost:3001.

## How to Request Data

Requesting data can be done through the Fetch API using an HTTP GET request to http://localhost:3001/name. Here is an example call to request data:

```   
const [name, setName] = useState(null);

async function getName() {
    const response = await fetch('http://localhost:3001/name');
    const data = await response.json();
    setName(data.name);
}

getName();
```

  If using React, I suggest wrapping this function within a useEffect() hook.

  ## How to Receive Data

  The data will be sent as a JSON object i.e. { name: 'Mateo' }. The name string can be accessed using 
  `{data.name}`.

