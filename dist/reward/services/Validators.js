"use strict";
class Validators {
    static required(c) {
        return c.value == "" ? { "required": true } : null;
    }
    static ratio(c) {
        return /^((\d|[123456789]\d)(\.\d+)?|100)$/.test(c.value);
    }
}
exports.Validators = Validators;
//# sourceMappingURL=/Users/th/Documents/www/thzs/ng2-reward/tmp/broccoli_type_script_compiler-input_base_path-xEyURD6b.tmp/0/tmp/broccoli_type_script_compiler-input_base_path-xEyURD6b.tmp/0/src/reward/services/Validators.js.map