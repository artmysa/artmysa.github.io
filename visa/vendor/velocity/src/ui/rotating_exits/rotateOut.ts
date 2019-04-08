/*
 * VelocityJS.org (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 * 
 * Based on animate.css: https://github.com/daneden/animate.css
 */

namespace VelocityStatic.UI {
	Velocity("registerSequence", "rotateOut", {
		duration: 1000,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "center"
		},
		"100%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,200deg)",
			transformOrigin: "center"
		}
	});
};
