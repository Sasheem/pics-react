import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (e) => {
        // prevents default form behavior of submitting itself when user presses Enter button
        e.preventDefault();
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* leaving () means this is a callback function */}
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;