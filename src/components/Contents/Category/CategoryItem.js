import React, { Component } from 'react';

class CategoryItem extends Component {
    render() {
        var {category, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>  
                    <button type="submit" className="btn btn-info">Edit</button>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default CategoryItem;
