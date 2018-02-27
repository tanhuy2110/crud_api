import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class Category extends Component {
    render() {
        var categories = [
            {
                id: 1,
                name: 'Food'
            },
            {
                id: 1,
                name: 'Drink'
            }
        ]
        return (
            <div className="card">
                <div className="header">
                    <button type="submit" className="btn btn-info btn-fill btn-wd">Add Category</button>
                </div>
                <div className="content table-responsive table-full-width">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.showProductItem(categories) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    showProductItem = (categories) => {
        var result = '';
        if(categories.length > 0) {
            result = categories.map((category, index) => {
                return (
                    <CategoryItem
                        key={index}
                        category={category}
                        index = {index}
                    />
                );
            })
        }
        return result;
    }
}
export default Category;
