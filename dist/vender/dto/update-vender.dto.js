"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVenderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_vender_dto_1 = require("./create-vender.dto");
class UpdateVenderDto extends (0, swagger_1.PartialType)(create_vender_dto_1.CreateVenderDto) {
}
exports.UpdateVenderDto = UpdateVenderDto;
//# sourceMappingURL=update-vender.dto.js.map