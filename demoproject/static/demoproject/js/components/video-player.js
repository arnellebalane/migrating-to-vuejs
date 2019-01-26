define(require => {
    const Zepto = require('zepto');

    class VideoPlayer {
        constructor(element) {
            this.element = Zepto(element);
            this.overlay = this.element.find('.video-player__overlay');
            this.progress = this.element.find('.video-player__progress');

            this.playing = false;
            this.percentage = 0;
            this.intervalID = null;

            this._initializeInteraction();
        }

        _initializeInteraction() {
            this.element.on('click', () => this.toggle());
        }

        toggle() {
            if (this.playing) {
                this.pause();
            } else {
                this.play();
            }
        }

        play() {
            this.playing = true;
            this.overlay.addClass('playing');

            if (this.percentage === 100) {
                this.percentage = 0;
            }

            this.intervalID = setInterval(() => {
                this.progress.css('width', `${++this.percentage}%`);
                if (this.percentage === 100) {
                    this.pause();
                }
            }, 250);
        }

        pause() {
            this.playing = false;
            this.overlay.removeClass('playing');

            clearInterval(this.intervalID);
        }
    }

    return VideoPlayer;
});
