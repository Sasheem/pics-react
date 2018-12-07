import axios from 'axios';

// creates an instance of the axios client w/ defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 21f99f1ca33a089849c133fa1c1e7f644e70deb6faa067a715de3947fb28f0e2'
    }
});