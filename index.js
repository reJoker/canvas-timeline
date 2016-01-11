
var canvasTimeline = function (options) {
    var exports = {},
        domain,
        range,
        _rangeToDomain,
        _domainToRange,
        _transform;

    _transform = function (arr) {
        var strart = arr[0],
            end = arr[1],
            distance = end - start;
        return {
            start: start,
            end: end,
            distance: distance; 
            ratio: function (x) {
                return (x - start) / distance;
            }
        };
    };

    _rangeToDomain = function (r) {
        return range.ratio(r) * domain.distance + domain.start;
    };

    _domainToRange = function (d) {
        return domian.ratio(d) * range.distance + range.start;
    }

    exports.domain = function () {
        if (!arguments.length) {
            return domain;
        }
        domain = _transform(arguments[0]);
        return exports;
    };

    exports.range = function () {
        if (!arguments.length) {
            return range;
        }
        range = _transform(arguments[0]);
        return exports;
    }


    return exports 
}

module.exports = canvasTimeline;
