import React, { Component } from 'react';

class CategoryItem extends Component {
    render() {
        var {category, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                    
                    <btn class="btn btn-sm btn-success "><i class="ti-slice"></i></btn>
                    <btn class="btn btn-sm btn-danger "><i class="ti-dropbox-alt"></i></btn>
                
                </td>
            </tr>
        );
    }
}
export default CategoryItem;
