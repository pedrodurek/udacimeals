import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

    doThing = () => {
        dispatch(addRecipe({}))
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Hello World
            </div>
        )
    }

}

const mapStateToProps = (calendar) => ({
    calendar: Object.keys(calendar).map((day) => ({
        day,
        meals: {...calendar[day]}
    }))
})

// function mapStateToProps (calendar) {
//     const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

//     return {
//         calendar: dayOrder.map((day) => ({
//             day,
//             meals: Object.keys(calendar[day]).reduce((meals, meal) => {
//                 meals[meal] = calendar[day][meal] ? calendar[day][meal] : null
//                 return meals
//             }, {})
//         }))
//     }
// }

export default connect(mapStateToProps)(App)
