class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(itemSearch, item) {
        if (this.head === null) {
            return null;
        }
        else if (this.head.next === null && this.head.value === itemSearch) {
            insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null && tempNode.next.value !== itemSearch) {
                tempNode = tempNode.next;
            }
            if (tempNode.next && tempNode.next.value === itemSearch){
              const auxNode = tempNode.next;
              tempNode.next = new _Node(item, auxNode);
            }else{
              console.log('Item not found');
            }
        }
    }

    insertAfter(itemSearch, item) {
        if (this.head === null) {
            return null;
        }
        else if (this.head.next === null && this.head.value === itemSearch) {
            insertLast(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.value !== itemSearch && tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            if (tempNode.value === itemSearch){
              const auxNode = tempNode.next;
              tempNode.next = new _Node(item, auxNode);
            }else{
              console.log('Item not found');
            }
        }
    }

    insertAt(itemIndex, item) {
        if (this.head === null) {
            return null;
        }
        else {
          let count = 0;
            let tempNode = this.head;
            while (count < itemIndex-1 && tempNode.next !== null) {
                tempNode = tempNode.next;
                count++
            }
            const auxNode = tempNode.next;
            tempNode.next = new _Node(item, auxNode);
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    display(){
      if (this.head === null) {
          console.log('Linked List Empty');
      }
      else {
        let display = ''
          let tempNode = this.head;
          display += (tempNode.value + ' , ');
          while (tempNode.next !== null) {
              tempNode = tempNode.next;
              display += (tempNode.value + ' , ')
          }
          console.log(display);
      }
    }
}

function main(){
    let SLL = new LinkedList();
    SLL.insertLast('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.display();

    SLL.insertLast('Tauhida')
    SLL.display();

    SLL.remove('squirrel')
    SLL.display();

    SLL.insertBefore('Boomer', 'Athena')
    SLL.display();

    SLL.insertAfter('Helo', 'Hotdog')
    SLL.display();

    SLL.remove('Tauhida')
    SLL.display();

    SLL.insertAt(3, 'Kat')
    SLL.display();
}

main()
