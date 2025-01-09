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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenderController = void 0;
const common_1 = require("@nestjs/common");
const vender_service_1 = require("./vender.service");
const create_vender_dto_1 = require("./dto/create-vender.dto");
const update_vender_dto_1 = require("./dto/update-vender.dto");
let VenderController = class VenderController {
    constructor(venderService) {
        this.venderService = venderService;
    }
    create(createVenderDto) {
        return this.venderService.create(createVenderDto);
    }
    findAll() {
        return this.venderService.findAll();
    }
    findOne(id) {
        return this.venderService.findOne(+id);
    }
    update(id, updateVenderDto) {
        return this.venderService.update(+id, updateVenderDto);
    }
    remove(id) {
        return this.venderService.remove(+id);
    }
};
exports.VenderController = VenderController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vender_dto_1.CreateVenderDto]),
    __metadata("design:returntype", void 0)
], VenderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VenderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vender_dto_1.UpdateVenderDto]),
    __metadata("design:returntype", void 0)
], VenderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenderController.prototype, "remove", null);
exports.VenderController = VenderController = __decorate([
    (0, common_1.Controller)('venders'),
    __metadata("design:paramtypes", [vender_service_1.VenderService])
], VenderController);
//# sourceMappingURL=vender.controller.js.map