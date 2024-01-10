
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxlv0NhaqNj8Jk5cuYg3onUPMX7e0wJ3dhp9g-59q4-FF4YStV8RawoY3wmS3soryd5pw/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Thank You For Subscribing"
        setTimeout(function(){
            msg.innerHTML=""
        },5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })




//   Thank you for watching ;-)