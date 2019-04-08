/*
 * VelocityJS.org (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 * 
 * Based on animate.css: https://github.com/daneden/animate.css
 */

namespace VelocityStatic.UI {
	Velocity("registerSequence", "flipOutX", {
		duration: 750,
		"0%,100%": {
			backfaceVisibility: "visible"
		},
		"0%": {
			transform: "perspective(400px) rotate3d(1,0,0,0)"
		},
		"30%": {
			opacity: "1",
			transform: "perspective(400px) rotate3d(1,0,0,-20deg)"
		},
		"100%": {
			opacity: "0",
			transform: "perspective(400px) rotate3d(1,0,0,90deg)"
		}
	});
};
