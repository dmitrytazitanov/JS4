'use strict';

/* function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = prompt(this.text);
};

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(highlighted) {
    this.highlighted = true;
};

let AttachedPost1 = new AttachedPost('автор', 'текст', "дата", false);
AttachedPost1.edit();
AttachedPost1.makeTextHighlighted();
console.log(AttachedPost1); */



class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = prompt(this.text);
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted(highlighted) {
        this.highlighted = true;
    }
}

let AttachedPost1 = new AttachedPost('автор', 'текст', "дата", false);
AttachedPost1.edit();
AttachedPost1.makeTextHighlighted();
console.log(AttachedPost1);

