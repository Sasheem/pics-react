import React from 'react';

import unsplash from '../api/unsplash'; 
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    // proper way to define an async function into as arrow function
    onSearchSubmit = async (term) => {
        // this is where we will make the API request
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onUserSubmit={this.onSearchSubmit}/>
                <p>Found: {this.state.images.length} images</p>
            </div>
        );
    }
}

export default App;