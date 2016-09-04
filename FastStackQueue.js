class FastStackQueue {
    constructor(size, removeImmediately) {
        this.Length = 0;
        this.Arr = new Array(size || 1);
        this.Pointer = 0;
        this.Last = null;
        this.RemoveImmediately = removeImmediately | true;
    }

    Enqueque(element) {
        return this.Push(element);
    }
    Push(element) {
        if (this.Length === this.Arr.length) {
            this.Arr.splice(this.Pointer, 0, element);
            if (this.Pointer <= this.Last) {
                this.Last++;
            }
        } else {
            this.Arr[this.Pointer] = element;
        }

        if (this.Length === 0) {
            this.Last = this.Pointer;
        }

        this.Pointer++;
        if (this.Pointer == this.Arr.length) {
            this.Pointer = 0;
        }

        return ++this.Length;
    }

    Pop() {
        if (this.Length === 0) {
            console.log("Tried to Pop from an empty array");
            console.log(this.GetState());
            throw "Tried to Pop from an empty array";
        }
        if (this.Pointer === 0) {
            this.Pointer = this.Arr.length - 1;
        } else {
            this.Pointer--;
        }

        var el = this.Arr[this.Pointer];
        if (this.RemoveImmediately) {
            this.Arr[this.Pointer] = null;
        }

        this.Length--;
        return el;
    }
    Peek(){
      return this.Arr[this.Last];
    }
    Top() {
        if (this.Length === 0) {
            console.log("Tried to Peek an empty array");
            console.log(this.GetState());
            throw "Tried to Peek an empty array";
        }
        if (this.Pointer === 0) {
            return this.Arr[this.Arr.length - 1];
        }
        return this.Arr[this.Pointer - 1];
    }

    Dequeue() {
        if (this.Length === 0) {
            console.log("Tried to Dequeque an empty array");
            console.log(this.GetState());
            throw "Tried to Dequeque an empty array";
        }
        this.Length--;
        var el = this.Arr[this.Last];
        if (this.RemoveImmediately) {
            this.Arr[this.Last] = null;
        }
        if (this.Length === 0) {
            this.Last = null;
        } else {
            if (this.Last === this.Arr.length - 1) {
                this.Last = 0;
            } else {
                this.Last++;
            }
        }
        return el;
    }

    Clean() {
        if (this.Length == 0) {
            this.Arr = [];
            this.Pointer = 0;
        } else {

            if (this.Pointer > this.Last) { //shorten Array as much as possible
                this.Arr.splice(this.Pointer);
                this.Pointer = 0;
            }
            if (this.Last < this.Pointer) {
                this.Arr.splice(0, this.Last);
                this.Pointer -= this.Last;
                this.Last = 0;
            }
            var toDelete;
            if (this.Pointer == this.Arr.length) {
                toDelete = 0;
            } else {
                toDelete = this.Pointer;
            }
            while (toDelete !== this.Last) { //Delete all elements which are not getable by Dequeue or Pop
                this.Arr[toDelete++] = null;
                if (toDelete == this.Arr.length) {
                    toDelete = 0;
                }
            }
            if (this.Pointer > this.Last) {
                this.Length = this.Pointer - this.Last;
            } else {
                this.Length = (this.Arr.length - this.Last) + this.Pointer;
            }
        }
    }

    GetState() {
        return "GetState: \n Length: " + this.Length + " Last: " + this.Last + " Pointer: " + this.Pointer + " RemoveImmediately: " + this.RemoveImmediately + " \n Arr: " + this.Arr.join("|");
    }
}

function EmptyArrayException(message) { //doesnt work
    this.message = message;
    this.name = "EmptyArrayException";
    this.toString = function() {
        return "Exception " + this.name + ":\n" + this.message;
    };
}
