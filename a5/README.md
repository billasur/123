Boilerplate Code:
The provided boilerplate code includes a React component named HigherOrderComponent. It defines the structure of the component and includes comments to guide you on completing the functionalities.

Test Cases:

The test cases use @testing-library/react to verify the component's behavior. They test:
- Rendering of all user data with at least one designer user displayed.
- Functionality of filtering by User Type 
- Functionality of filtering by starting letter 
- Functionality of filtering by age range 

## What is expected of you :

- You will need to complete the unfinished functions within the HigherOrderComponent class to achieve the desired functionalities.
-  They can use the provided test cases as a guide to ensure their code works as expected.
- So let's get started! Check below to see the overall output: You will be trying to replicate this
![](https://camo.githubusercontent.com/d8207f97ff5e5397091b22b12ff826da4758779b0369a5d25765f2f4135c1c11/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f72656e646572696e672d6c61622d616c6c2e706e67)


PROGRESSION 1 | DEFINE THE STATE
Your task in this iteration is just to create an array of objects inside the state. To do this, let's go to our HigherOrderComponent.jsx and inside the class try to define the constructor and the state. Just remember you need to define the super constructor before defining the state. Your code should look something like this.

  constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

You're ready to move to the next iteration. 🙌

PROGRESSION 2 | LIST ALL ITEMS
Now we have defined our data to be used. Your task in this iteration is to display all the elements from userData. Your output should be looking like this.
![](https://camo.githubusercontent.com/67ab5cc380a4b3420817ce02fd6e98bc162153295739a0755c605c25a7c3eb68/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f72656e646572696e672d6c61622d646973706c6179416c6c2e706e67)

Remember to use map function to display all the details

Code Snippet for reference

// display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};

Now the most important step, You need to return the value to the render method so that the output get's displayed in the container.

render() {
        return (
        // instead of a parent div tag we can also use React.Fragment
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
          </React.Fragment>
If you do the above, you still can't see the output. Do you know why it is because you need to add your component to your app.jsx file.

![](https://camo.githubusercontent.com/245be5245b9a6727baea4547b58c730916f90c1a4cfcfaa995338128b9c8d2e5/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f72656e646572696e672d6c61622d7374727563747572652e706e67)

If you get the above output, you can ensure that the react is completely setup in your system.

PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE
Your output should like this. In this iteration you should filter the userData based on the UserType. Note: Please use map and filter

![](https://camo.githubusercontent.com/f3eccb3594ac7616429d2bf4028bbdd411817f03e32cac3ab747b7e6c34c1d46/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f72656e646572696e672d6c61622d75736572747970652e706e67)

PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J
Filter all names starting with the letter J. Note: Please use map and filter

Your output should like this
![](https://camo.githubusercontent.com/8ff88c49981a675c8f4f4715f45288ca89be4acd1199edb6f5ce2a258ee4222b/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f72656e646572696e672d6c61622d6c65747465722d4a2e706e67)

PROGRESSION 5 | FILTER DATA BASED ON AGE
In this progression, Filter the data based on the age. The age should be greater than 28 and less than or equal to 50. Note: Please use map and filter

Your output should like this.
![](https://camo.githubusercontent.com/ccc1c90ab278ff62c405528a455fc51fefaf4dde579259f443cf44ba9733d02b/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f72656e646572696e672d6c61622d61676566696c7465722e706e67)

PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
In this progression, you need to find the total years of experience of the designers.

Note: Please use map, filter and reduce Your output should like this.
![](https://camo.githubusercontent.com/9cba1bccf3f0685e13e41f64d2b81eb41d6b93faefc21b4d02a6df70483350f7/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f72656e646572696e672d6c61622d746f74616c2d79656172732e706e67)

Summary
If you managed to do it, good job! 🏆

We are proud of you!

Happy Coding Kalvium ❤️!