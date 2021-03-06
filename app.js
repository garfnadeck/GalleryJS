function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

function Gallery(element) {
  this.container = element
  this.list = [...element.querySelectorAll('.img')]
  this.modal = getElement('.modal')
  this.modalImg = getElement('.main-img')
  this.imageName = getElement('.image-name')
  this.modalImages = getElement('.modal-images')
  this.closeBtn = getElement('.close-btn')
  this.prevBtn = getElement('.prev-btn')
  this.nextBtn = getElement('.next-btn')
  // bind functions

  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list)
      }
    }.bind(this)
  )
}

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src
  this.imageName.textContent = selectedImage.title
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage)
  this.modalImages.innerHTML = list.map(function (image) {}).join('')
  this.modal.classList.add('open')
}

const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))
