import React from 'react';

import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit = (term) => {
        console.log(term);
        // this is where we will make the API request
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onUserSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;