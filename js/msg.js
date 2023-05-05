import { getToCloneElem, getOnAnotherAreaClickListener, getOnEscKeydownListener } from './utils.js';

function Message(templateSelector, sectionSelector, parentElem, btnSelector, innerElemSelector) {
  //alert(getToCloneElem(templateSelector, sectionSelector).cloneNode(true));
  this.msgElem = getToCloneElem(templateSelector, sectionSelector).cloneNode(true);
  this.btnElem = this.msgElem.querySelector(btnSelector);
  // this.onAnotherAreaClick = getOnAnotherAreaClickListener(innerElemSelector, this.close);
  this.parentElem = parentElem;
  this.onEscKeydown = getOnEscKeydownListener(this.close);
}

Message.prototype.show = function() {
  alert(this)
  this.parentElem.append(this.msgElem);
  document.addEventListener('keydown', this.onEscKeydown);
//   document.addEventListener('click', onAnotherAreaClick);
//   this.btnElem.addEventListener('click', closeMsg);
};

Message.prototype.close = function() {
  document.removeEventListener('keydown', this.onEscKeydown);
  
  this.msgElem.remove();
//   document.addEventListener('click', onAnotherAreaClick);
//   this.btnElem.addEventListener('click', closeMsg);
};

export {Message};


