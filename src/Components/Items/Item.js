import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class Item extends Component {
    toChange = (str)=>{
        str = str.toLowerCase();     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd'); 
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
        // return
        return str;
    }
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
            <Link to={"/detail/"+this.toChange( this.props.title)+"."+this.props.id+".html"}><img className="card-img-top" src={this.props.img} alt="" /></Link>
                  <div className="card-body">
                    <h4 className="card-title">
        <Link to={"/detail/"+this.toChange( this.props.title)+"."+this.props.id+".html"}>{this.props.title}</Link>
                    </h4>
        <p className="card-text">{this.props.description}</p>
                  </div>
                  <div className="card-footer">
        <small className="text-muted"><i className="fa fa-eye" aria-hidden="true"></i> : {this.props.view}</small>
                  </div>
                  </div>
                  </div>
        );
    }
}

export default Item;