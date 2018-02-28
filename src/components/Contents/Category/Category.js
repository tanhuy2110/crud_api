import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import {connect} from 'react-redux';
import axios from 'axios';
import {actFetchCategories} from './../../../action/index';
import callApi from './../../../utils/apiCaller';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
    }
    
    componentDidMount() {
        callApi('category', 'GET', null).then(res=> {
            //this.props.fetchAllCategories(res.data)
            console.log(res.data);
        });
    }

    render() {
        //var {categories} = this.props;
        var categories = [];
        
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

const mapStateToProps = state => { 
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: (categories) => {
            dispatch(actFetchCategories);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
