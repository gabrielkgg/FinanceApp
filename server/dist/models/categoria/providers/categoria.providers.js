"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriasProviders = void 0;
const categoria_entity_1 = require("../entities/categoria.entity");
const providers_1 = require("./constants/providers");
exports.categoriasProviders = [
    {
        provide: providers_1.CATEGORIA_REPOSITORY,
        useValue: categoria_entity_1.Categoria,
    },
];
//# sourceMappingURL=categoria.providers.js.map