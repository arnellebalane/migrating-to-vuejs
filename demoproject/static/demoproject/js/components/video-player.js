define(require => {
    const Zepto = require('zepto');

    class VideoPlayer {
        constructor(element) {
            this.element = Zepto(element);
            this.progress = this.element.find('.video-player__progress');

            this.playing = false;

            this._initializeInteraction();
            this._initializeEvents();
        }

        _initializeInteraction() {
            this.element.on('click', () => this.toggle());
        }

        _initializeEvents() {
            this.progress.on('animationend', () => {
                this.pause();
                this.progress.removeClass('animating');
            });
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
            this.element.addClass('playing');
            this.progress.addClass('animating');
        }

        pause() {
            this.playing = false;
            this.element.removeClass('playing');
        }
    }

    return VideoPlayer;
});
