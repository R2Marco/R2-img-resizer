    function resizeImage() {
      var imageURL = document.getElementById('imageURL').value;
      var scaleValue = document.getElementById('scaleRange').value;
      var previewImage = document.getElementById('preview');

      previewImage.style.transform = 'scale(' + scaleValue + ')';
      previewImage.src = imageURL;
    }

    function resetImage() {
      //document.getElementById('imageURL').value = '';
      document.getElementById('scaleRange').value = 1;
      resizeImage();
    }