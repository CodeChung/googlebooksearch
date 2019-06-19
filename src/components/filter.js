import React from 'react';
import './filter.css';

class Filter extends React.Component {
    render() {
        return (
            <div className="forms">
                <form>
                    <label htmlFor="print-type">Print Type:</label>
                    <select name="print-type" onChange={e => this.props.setPrint(e.target.value)}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </form>
                <form>
                    <label htmlFor="book-type">Book Type:</label>
                    <select name="book-type" onChange={e => this.props.setFilter(e.target.value)}>
                        <option value="">No Filter</option>
                        <option value="partial">Partial Preview</option>
                        <option value="full">Full Preview</option>
                        <option vlaue="ebooks">Ebooks</option>
                        <option value="free-ebooks">Free Ebooks</option>
                        <option value="paid-ebooks">Paid Ebooks</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Filter;