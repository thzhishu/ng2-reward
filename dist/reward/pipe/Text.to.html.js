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
let TextTohtmlPipe = class TextTohtmlPipe {
    transform(items, args) {
        if (items === undefined)
            return null;
        return items.replace(/[\n]/g, '<br/>');
    }
};
TextTohtmlPipe = __decorate([
    core_1.Pipe({
        name: 'textTohtml'
    }),
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], TextTohtmlPipe);
exports.TextTohtmlPipe = TextTohtmlPipe;
//# sourceMappingURL=/Users/worm/github/ng2-reward/tmp/broccoli_type_script_compiler-input_base_path-demb8zc9.tmp/0/tmp/broccoli_type_script_compiler-input_base_path-demb8zc9.tmp/0/src/reward/pipe/Text.to.html.js.map