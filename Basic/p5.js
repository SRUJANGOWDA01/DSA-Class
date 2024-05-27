
function Abc(a,b) {
    this.x = a;
    this.y = b;
    this.sum = () => {
        console.log(this.x + this.y);
    }

    const print = () => {
        console.log(this.x, this.y);
    }

    function display() {
        console.log(this.x, this.y);
    }

    display();
    print();

}

const obj = new Abc(10,20);

obj.sum();