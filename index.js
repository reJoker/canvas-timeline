
var canvasTimeline = function (options) {
    var exports = {},
        domain,
        range
        _rangeToDomain,
        _domainToRange;

    exports.domain = function () {
        if (!arguments.length) {
            return domain;
        }
        domain = arguments[0];
        return this;
    };

    exports.range = function () {
        if (!arguments.length) {
            return range;
        }
        range = arguments[0];
        return this;
    }


    return exports 
}

module.exports = canvasTimeline;
