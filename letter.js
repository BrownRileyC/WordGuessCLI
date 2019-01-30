var Letter = function (str) {
    this.str = str,
    this.status = false,
    this.show = function() {
        if (this.status === true) {
            return str
        } else {
            return '_'
        }
        },
    this.guess = function(arg) {
        if (arg === this.str){
            this.status = true
            this.show();
        }
    }
};
module.exports = Letter