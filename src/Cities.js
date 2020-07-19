import React from 'react';

class MyComponent extends React.Component {
  render() {
    const arrayCites = this.props.cityArray
    const shortListed = arrayCites.filter((city) => city.length > 3)
    //this.props.myFunction()
    return (
      <ul>
        {
          shortListed.map((city) => <li key={city}>{city}</li>)
        }
      </ul>
    )
  }
}

function FunctionComponent(props) {
  return (
    <h1>{props.heading}</h1>
  )
}

function App () {
const array1 = ['GNS', 'Khipro', 'Tharparkar', 'Umerkot']
  const array2 = ['Karachi', 'Mirpurkhas', 'Hyderabad']
  const myFunction = () => alert('Hello')
  let arr = ['Suneel', 'Kumar', 1]
  let [fName, lName, degree] = arr
  console.log(`${fName} ${lName} has ${degree} in Bachelors`)
  return (
    
    <div>
      <FunctionComponent heading="Cities Name:" />
      <MyComponent cityArray={array1} myFunction={myFunction} />
      <hr />
      <MyComponent cityArray={array2} myFunction={myFunction} />
    </div>
    
  );
}

export default App