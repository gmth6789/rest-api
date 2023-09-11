// const { Controller, Get, RootUrl, Post } = require('@tuzilow/express-decorator')
import { Controller, Get, RootUrl, Post } from '@tuzilow/express-decorator'
import { config } from '../util/common'
const { MenuItem, menuList } = require('../decorator/MenuItem')
const https = require('https')
const path = require('path')
const os = require('os')

var list2tree = function(list, parentMenuId) {
    let menuObj = {}
    list.forEach(item => {
        item.children = []
        menuObj[encodeURIComponent(item.path)] = item
    })
    return list.filter(item => {
        if (item.pmenu !== parentMenuId) {
            // console.log(encodeURIComponent(item.pmenu))
            // console.log(menuObj[encodeURIComponent(item.pmenu)])
            if (menuObj[encodeURIComponent(item.pmenu)]) {
                menuObj[encodeURIComponent(item.pmenu)].children.push(item)
                return false
            } else {
                return true
            }
        }
        return true
    })
}

@Controller
class CoreController {
  @RootUrl('')
  url() {}

  @Get('/xyadmin')
  home(req, res) {
    res.redirect("/xyadmin/");
  }

  @Get('/xyadmin/')
  xyadmin(req, res) {
    https.get('https://uiadmin.net/xyadmin/?version=1.3.0', ret => {
        let list = [];
        ret.on('data', chunk => {
            list.push(chunk);
        });
        ret.on('end', () => {
          res.send(Buffer.concat(list).toString())
        });
    }).on('error', err => {
        console.log('Error: ', err.message);
    });
  }

  @Get('/xyadmin/api')
  xyadminApi(req, res) {
    if (process.env.NODE_ENV == 'development') {
        console.log(req.headers);
    }
    let host = '';
    let protocol = '';
    if (req.headers['x-forwarded-host']) {
        host = req.headers['x-forwarded-host'];
        protocol = req.headers['x-forwarded-scheme'];
    } else {
        host = req.get('host');
        protocol = req.protocol;
    }
    res.json({
        "code": 200,
        "msg": "success",
        "data": {
            "framework": "express",
            "stype": "แอปพลิเคชัน",
            "name": "uiadmin-express",
            "api": {
                "apiLogin": "/v1/admin/user/login",
                "apiConfig": "/v1/site/info",
                "apiBase": protocol + '://' + host + "/api",
                "apiUserInfo": "/v1/admin/user/info",
                "apiAdmin": config.get("uiadmin.api-url.api-admin") || "/v1/admin/index/index",
                "apiMenuTrees": "/v1/admin/menu/trees"
            },
            "lang": "python",
            "title": config.get("uiadmin.site.title"),
            "domainRoot": protocol + '://' + host,
            "siteInfo": {
                "title": config.get("uiadmin.site.title")
            },
            "version": "1.0.0",
            "config": {
                "useVerify": "",
                // "headerRightToolbar": [
                //         {
                //             "type": "url",
                //             "title": "接口文档",
                //             "class": "xyicon xyicon-map",
                //             "url": "/doc.html"
                //         }
                // ]
            }
        }
    })
  }

  @Post('/api/v1/admin/user/login')
  admin_login(req, res) {
    //if (process.env.NODE_ENV == 'development') {
        console.log(req.body);
    //}
    if (!req.body.account == 'admin'
        || !req.body.password == 'uiadmin') {
        res.json({
            "code": 0,
            "msg": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
            "data": {
            }
        })
        return
    }
    config.get("uiadmin.user.user-list").forEach(user => {
        if (user.username == req.body.account) {
            if (req.body.password == user.password) {
                res.json({
                    "code": 200,
                    "msg": "เข้าสู่ระบบสำเร็จ",
                    "data": {
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI",
                        "userInfo": user
                    }
                })
                return
            } else {
                res.json({
                    "code": 0,
                    "msg": "รหัสผ่านผิด",
                    "data": {}
                })
                return
            }
        }
    });
    res.json({
        "code": 0,
        "msg": "ไม่มีผู้ใช้อยู่",
        "data": {}
    })
  }

  @Get('/api/v1/admin/user/info')
  userInfo(req, res) {
    res.json({
        "code": 200,
        "msg": "ความสำเร็จ",
        "data": {
            "userInfo": {
                "id": 1,
                "nickname": "admin",
                "username": "admin",
                "country": "+66",
                "mobile": "",
                "email": "",
                "avatar": "",
                "roles": "",
                "authorities": ["ROLE_SUPER_ADMIN"],
                "status": 1,
            }
        }
    })
  }

  @MenuItem({title: "ระบบ", path: "/_system", pmenu: "/default_root", menuType: -1, sortnum: 99, icon: "xyicon-settings"})
  @MenuItem({title: "เครื่องมือในการพัฒนา", path: "/dev", pmenu: "/_system", menuType: 0, sortnum: 0})
  @MenuItem({title: "เนื้อหา", path: "/_content", pmenu: "/default_root", menuType: -1, sortnum: 10, icon: "xyicon-plane"})
  @MenuItem({title: "การจัดการเนื้อหา", path: "/content", pmenu: "/_content", menuType: 0, sortnum: 0})
  @Get('/api/v1/admin/menu/trees')
  admin_menu_trees(req, res) {
    let menuTree = list2tree(menuList, null)
    res.json({
        "code": 200,
        "msg": "成功",
        "data": {
            "menu2routes": true,
            "listData": {
                "dataList": [
                    {
                        "title": config.get("uiadmin.site.title"),
                        "logo": "",
                        "path": "/root",
                        "status": 1,
                        "children": menuTree
                    }
                ]
            }
        }
    })
  }

  @Get('/api/v1/admin/index/index')
  index(req, res) {
    res.json({
      "code": 200,
      "msg": "success",
      "data": {
          "dataList": [
              {
                      "type": "count",
                      "content": [
                          {
                              "item": {
                                  "bgColor": "#2db7f5",
                                  "icon": "ivu-icon ivu-icon-md-contacts",
                                  "title": ""
                              },
                              "current": {
                                  "suffix": "",
                                  "value": "0"
                              },
                              "content": {
                                  "value": "注册用户"
                              }
                          },
                          {
                              "item": {
                                  "bgColor": "#19be6b",
                                  "icon": "ivu-icon ivu-icon-md-person-add",
                                  "title": ""
                              },
                              "current": {
                                  "suffix": "",
                                  "value": "0"
                              },
                              "content": {
                                  "value": "ใหม่วันนี้"
                              }
                          },
                          {
                              "item": {
                                  "bgColor": "#ff9900",
                                  "icon": "ivu-icon ivu-icon-md-clock",
                                  "title": ""
                              },
                              "current": {
                                  "suffix": "",
                                  "value": "0"
                              },
                              "content": {
                                  "value": "总消费"
                              }
                          },
                          {
                              "item": {
                                  "bgColor": "#ed4014",
                                  "icon": "ivu-icon ivu-icon-ios-paper-plane",
                                  "title": ""
                              },
                              "current": {
                                  "suffix": "",
                                  "value": "0"
                              },
                              "content": {
                                  "value": "今日消费"
                              }
                          }
                      ],
                      "span": 24
              },
              {
                      "type": "card",
                      "title": "系统信息",
                      "content": [
                          {
                              "type": "text",
                              "title": "服务器IP",
                              "value": ""
                          },
                          {
                              "type": "text",
                              "title": "WEB服务器",
                              "value": ""
                          },
                          {
                              "type": "text",
                              "title": "JDK版本",
                              "value": ""
                          },
                          {
                              "type": "text",
                              "title": "服务器时间",
                              "value": ""
                          },
                          {
                              "type": "text",
                              "title": "官方网站",
                              "value": "https://jiangruyi.com(ijry@qq.com)"
                          }
                      ],
                      "span": 12
              },
              {
                      "type": "card",
                      "title": "项目信息",
                      "content": [
                          {
                              "type": "text",
                              "title": "项目名称",
                              "value": ""
                          },
                          {
                              "type": "text",
                              "title": "项目口号",
                              "value": ""
                          },
                          {
                              "type": "text",
                              "title": "项目简介",
                              "value": ""
                          },
                          {
                              "type": "text",
                              "title": "ICP备案号",
                              "value": ""
                          }
                      ],
                      "span": 12
              }
          ]
      }
  })
  }
}

module.exports = CoreController

