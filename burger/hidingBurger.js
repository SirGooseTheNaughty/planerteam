class HidingBurger {
    constructor(burger) {
        this.burger = burger;
        this.timeout = null;
        this.isHidden = false;
        this.delay = 2000;
        this.docBody = document.querySelector('body');
        this.trigger = this.burger.querySelector('.trigger');

        this.handleScroll = this.handleScroll.bind(this);
        this.hideBurger = this.hideBurger.bind(this);
        this.showBurger = this.showBurger.bind(this);
        this.isLose = this.isLose.bind(this);
        this.isOpened = this.isOpened.bind(this);

        window.addEventListener('scroll', this.handleScroll);
        this.trigger.addEventListener('click', this.handleScroll);
    }

    handleScroll() {
        if (this.isLose() || this.isOpened()) {
            return;
        }
        if (this.isHidden) {
            this.showBurger();
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.hideBurger, this.delay);
    }

    hideBurger() {
        if (this.isLose() || this.isOpened()) {
            return;
        }
        this.burger.classList.add('hidden');
        this.isHidden = true;
    }
    showBurger() {
        this.burger.classList.remove('hidden');
        this.isHidden = false;
    }
    isLose() {
        return this.burger.classList.contains('burger-header-lose');
    }
    isOpened() {
        return this.docBody.classList.contains('burger-opened');
    }
}
const hb = new HidingBurger(burger.header);