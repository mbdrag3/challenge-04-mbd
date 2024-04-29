const userName = document.querySelector('#username');
const titleName = document.querySelector('#title');
const contentText = document.querySelector('#content');
const submitButton = document.querySelector('#button');


let userNameArray = []; 
let titleNameArray = [];
let contentTextArray = [];

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  userNameArray.push(userName.value.trim()); //
  titleNameArray.push(titleName.value.trim());
  contentTextArray.push(contentText.value.trim());

  let blogPost = {
    userName: userNameArray, //using trim will remove unwanted spaces
    titleName: titleNameArray,
    contentText: contentTextArray,

  };

  if (userName.value === '') {
    alert('error', 'Username cannot be blank'); //fix if statement
  } 
  if (titleName.value === '') {
    alert('error', 'Title cannot be blank');
  } 
  if (contentText.value === '') {
    alert('error', 'Content cannot be blank');
  } 
  if (userName.value && titleName.value && contentText.value) {
    window.location.href = "./blogposts.html" // linking to the second HTML page
  }


  localStorage.setItem("Username", JSON.stringify(blogPost.userName));
  localStorage.setItem("Title", JSON.stringify(blogPost.titleName));
  localStorage.setItem("Content", JSON.stringify(blogPost.contentText));
  




});


/* for (let i = 0; i < 5; i++) {
  // Create a new div element
  const divElement = document.createElement('div');
  // Set the content of the div, you can change this according to your array structure
  divElement.textContent = userNameArray[i % userNameArray.length];
  // Append the div element to the body (you can change this to any other parent element)
  document.body.appendChild(divElement);
}
*/

