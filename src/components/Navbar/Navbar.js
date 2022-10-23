import React from 'react'
import './Navbar.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    handleCahnge = (event) => {
        const text = event.target.value
        this.props.onSearch(text);
        event.preventDefault()
    }

    render() {
        return (
            <div className = 'search-bar'>
                <input
                    type="text"
                    onChange={this.handleCahnge}
                    placeholder="Search by Title"
                />
            </div>
        )
    }
}

export default Navbar