## Introduction
The task is to create a webpage which looks like the image below:

## Before this lab:
It is very important that you come to this lab -- only after you have completed the previous lab - which is --> Assignment | Understanding JSX with React-> as this lab is a continous lab of that.

## Steps to follow:
1. For this exercise too, you have to make a webpage which looks like the above image. But this time, let's make some changes in the structure of our application. As you might have observed in the previous lab -- that we were creating data in both App.jsx and AppClass.jsx files. But the data used was the same for both the files. So, if the data is same for both the files, then why to create data twice. In order to overcome this situation - we will be using props.


2. The following code is removed from App.jsx and AppClass.jsx and is added in src/components/DataComponent.jsx

const imageData = ()=>{
let data = [
  {
    id:1,
    img:'https://github.com/Kalvium-Program/lab-react-props-solution/blob/main/src/images/elephant.jpeg?raw=true'
  },
  {
    id:2,
    img:'https://github.com/Kalvium-Program/lab-react-props-solution/blob/main/src/images/elephant.jpeg?raw=true'
  },
  {
    id:3,
    img:'https://github.com/Kalvium-Program/lab-react-props-solution/blob/main/src/images/elephant.jpeg?raw=true'
  },
  {
    id:4,
    img:'https://github.com/Kalvium-Program/lab-react-props-solution/blob/main/src/images/elephant.jpeg?raw=true'
  }
]
return data;
}


3. Now use props to get data inside your App.jsx and AppClass.jsx files.
Happy Coding Kalvium ❤️!

