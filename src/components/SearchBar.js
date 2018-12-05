import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // passing an arrow function automatically binds 'this'
    onFormSubmit = (e) => {
        // prevents default form behavior of submitting itself when user presses Enter button
        e.preventDefault();
        this.props.onUserSubmit(this.state.term);
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