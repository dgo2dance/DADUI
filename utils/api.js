/**
 * 
 * API 调用配置文件
 */
'use strict';
// var HOST_URI = 'https://api.500px.com/v1/';
var HOST_URI = 'http://localhost:8080/';

var PHOTOS = 'photos';
var USERS = '/users';
var SHOW_ID = '/show?id=';
var GALLERIES = '/galleries';
var COMMENTS = '/comments';

var LOGIN = 'login';
var orgList = 'org/list';

var CKEY = 'pd67OURWTmXMy6X1E3DL5jmr9aBAZ9VLjZp4jLvz';

//登录验证URL
function _getLogin(){
  return HOST_URI + LOGIN;
}


//getOrg  URL
function _getOrgList(){
  return HOST_URI + orgList;
}


function _showUser(id){
  return HOST_URI + USERS + SHOW_ID + id;
}


function _isNone(s){
  return s == '' || s == null || s == undefined;
}


module.exports = {
  getLogin: _getLogin,
  getOrgList:_getOrgList
};