"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
const config_1 = require('../services/config');
const BaccaratAddUrl = config_1.baseUrl + '/rewardManage/turntable/add';
const BaccaratEditUrl = config_1.baseUrl + '/rewardManage/turntable/edit';
const BaccaratInfoUrl = config_1.baseUrl + '/rewardManage/info/query/';
let BaccaratService = class BaccaratService {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    getOne(id) {
        return this.http.get(BaccaratInfoUrl + id).map(res => res.json()).catch(this.handleError);
    }
    /**
     * 新增和修改大转盘奖励
     * @param  {[object]} data [插入数据]
     * @return {[Observables]}      [observables 数据]
     */
    add(args) {
        let data = Object.assign({}, args);
        let URL;
        if (data.cRPId === null || data.cRPId === undefined || isNaN(data.cRPId)) {
            URL = BaccaratAddUrl; //新增
        }
        else {
            URL = BaccaratEditUrl; //修改
        }
        //加工数据
        data.cRPNameShow = data.cRPNameShow ? 1 : 0;
        data.cRPSubtitleShow = data.cRPSubtitleShow ? 1 : 0;
        data.cRPBackgroundShow = data.cRPBackgroundShow ? 1 : 0;
        data.cRPDescShow = data.cRPDescShow ? 1 : 0;
        data.cRPNoticeNow = data.cRPNoticeNow ? 1 : 0;
        data.cRPValidNotice = data.cRPValidNotice ? 1 : 0;
        let items = [];
        data.subInfo.forEach(item => {
            items.push({ cRPDId: item.cRPDId, cRPDNameShow: item.cRPDNameShow ? 1 : 0, cRPDSubtitleShow: item.cRPDSubtitleShow ? 1 : 0, cRPDNum: item.cRPDNum, cRPDName: item.cRPDName, cRPDSubtitle: item.cRPDSubtitle, cRPDBackgroundAdd: item.cRPDBackgroundAdd });
        });
        data.subInfo = items;
        let body = JSON.stringify(data);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(URL, body, options).map(res => res.json()).catch(this.handleError);
    }
    /**
     * 删除核验型奖励
     * @param  {[number]} id
     * @return {[Observables]}  [observables 数据]
     */
    delete(id) {
        let URL = config_1.baseUrl + '/rewardManage/status/edit';
        let data = { cRPId: id, cRPStatus: 0 }; //0删除,1发放中,2暂停中
        let body = JSON.stringify(data);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(URL, body, options).map(res => res.json()).catch(this.handleError);
    }
    /**
     * 发放/暂停核验型奖励
     * @param  {[type]} id
     * @param  {[type]} state [0删除,1发放中,2暂停中]
     * @return {[type]}       [observables 数据]
     */
    putState(id, state) {
        let URL = config_1.baseUrl + '/rewardManage/status/edit';
        let data = { cRPId: id, cRPStatus: state }; //0删除,1发放中,2暂停中
        let body = JSON.stringify(data);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(URL, body, options).map(res => res.json()).catch(this.handleError);
    }
    /**
     * 关联项目
     * @param  {[object]} params [cRPId,queryType:[1当前正在关联的/2所有的关联的，包括历史]]
     * @return {[Observables]}   [observables 数据]
     */
    projectsList(params) {
        let search = new http_1.URLSearchParams();
        search.set('cRPId', params.cRPId);
        search.set('queryType', params.queryType);
        let URL = config_1.baseUrl + '/rewardManage/projects/list';
        return this.http.get(URL, { search: search }).map(res => res.json()).catch(this.handleError);
    }
    /**
     * 奖励列表
     * @param  {[object]} params [cRPId,startDate,endDate,projectId,cRPDId]
     * @return {[Observables]}   [observables 数据]
     */
    pinList(params) {
        let search = new http_1.URLSearchParams();
        search.set('cRPId', params.cRPId + '');
        search.set('startDate', params.startDate);
        search.set('endDate', params.endDate);
        search.set('projectId', params.projectId + '');
        search.set('currentPage', params.currentPage + '');
        search.set('pageSize', params.pageSize + '');
        let URL = config_1.baseUrl + '/rewardManage/check/list';
        return this.http.get(URL, { search: search }).map(res => res.json()).catch(this.handleError);
    }
    /**
     * 发放总量
     * @param  {[object]} id [奖励ID]
     * @return {[Observables]}   [observables 数据]
     */
    totalList(id) {
        let URL = config_1.baseUrl + '/rewardManage/check/total/' + id;
        return this.http.get(URL).map(res => res.json()).catch(this.handleError);
    }
    /**
     * 追加数量
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    addTotal(data) {
        let URL = config_1.baseUrl + '/rewardManage/nums/append';
        let body = JSON.stringify(data);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(URL, body, options).map(res => res.json()).catch(this.handleError);
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    }
};
BaccaratService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], BaccaratService);
exports.BaccaratService = BaccaratService;
//# sourceMappingURL=/Users/worm/github/ng2-reward/tmp/broccoli_type_script_compiler-input_base_path-demb8zc9.tmp/0/tmp/broccoli_type_script_compiler-input_base_path-demb8zc9.tmp/0/src/reward/+baccarat/Baccarat.service.js.map