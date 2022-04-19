import React from "react";

function OtherBooks(props) {
  return (
    <div class="other-book-item">
      <div class="other-book-image">
        <img src={props.image} width="150px" />
      </div>
      <div class="other-book-name">{props.bookName}</div>
      <div class="other-book-writer">{props.bookWriter}</div>
    </div>
  );
}

export default OtherBooks;
