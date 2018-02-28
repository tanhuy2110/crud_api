import React, { Component } from 'react';

class CategoryAction extends Component {
    render() {
        return (
            <div className="card">  
                <div className="content">
                    <form>
                        <div className="row">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <div className="form-group">
                                    <label>Category</label>
                                    <input type="text" className="form-control border-input" placeholder="Category" value=""/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info btn-fill btn-wd">Update</button>
                    </form>
                </div>
            </div>
        );       
    }
}
export default CategoryAction;
