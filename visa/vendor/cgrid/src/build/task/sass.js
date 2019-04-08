/**
 * Task Module for manage sass
 * @module Task
 * @author sebastian yabiku
 * @returns {function}
 */
function Task(gulp, plugins, pathFiles) {

	/**
	 * Config object.
	 * @type {object}
	 */
	var config = {
		frontend: {
			pathStyle: pathFiles.frontend.styles
		},
		public: {
			pathStyle: pathFiles.public.base
		}
	};

	/**
	 * Tasks of functions.
	 * @constructor taskRun
	 */
	var taskRun = function () {

		var cgrid = {

			build: function () {
				return gulp.src(config.frontend.pathStyle + '/cgrid-main.scss')
					.pipe(plugins.sass())
					.pipe(gulp.dest(config.public.pathStyle));
			},
			min: function(){
				return gulp.src(config.frontend.pathStyle + '/cgrid-main.scss')
					.pipe(plugins.sass({
						outputStyle: 'compressed'
					}))
					.pipe(plugins.rename('cgrid-main.min.css'))
					.pipe(gulp.dest(config.public.pathStyle))
			}
		}

		gulp.task('sass:build', cgrid.build);
		gulp.task('sass:min', cgrid.min);

		gulp.task("sass", function (cb) {
			plugins.runSequence("sass:build", "sass:min", cb)
		});
	};

	return {
		run: taskRun
	}

}

module.exports = Task;

