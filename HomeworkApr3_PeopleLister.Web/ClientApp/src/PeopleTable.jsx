import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    state = {
        currentPerson: {
            firstName: '',
            lastName: '',
            age: ''
        },

        people: []
    }

    onTextboxChange = e => {
        let copy = { ...this.state.currentPerson };
        if (e.target.placeholder === 'First Name') {
            this.setState({ currentPerson: { ...this.state.currentPerson, firstName: e.target.value } });
        }
        else if (e.target.placeholder === 'Last Name') {
            this.setState({ currentPerson: { ...this.state.currentPerson, lastName: e.target.value } });
        }
        else if (e.target.placeholder === 'Age') {
            this.setState({ currentPerson: { ...this.state.currentPerson, age: e.target.value } });
        }
    }

    onAddClick = () => {
        //if (!this.state.firstName || !this.state.lastName || !this.state.age) {
        //    return;
        //}
        console.log('add clicked!')
        const person = {
            firstName: this.state.currentPerson.firstName,
            lastName: this.state.currentPerson.lastName,
            age: this.state.currentPerson.age
        };
        //console.log(person);
        this.setState({ people: [...this.state.people, { firstName: person.firstName, lastName: person.lastName, age: person.age }] });
        this.setState({ currentPerson: { ...this.state.currentPerson, firstName: '', lastName: '', age: '' } });
        //console.log(this.state.people.length)
    }
    onClearClick = () => {
        this.setState({ people: [] });
    }
    render() {
        return (
            <>
                <div className='container mt-5'>
                    <PersonForm onTextboxChange={this.onTextboxChange}
                        currentPerson={this.state.currentPerson}
                        onAddClick={this.onAddClick}
                        onClearClick={this.onClearClick} />
                </div>
                <div className='container mt-5'>
                    <table className='table table-hover table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.people.map(p => <PersonRow person={p} />)}

                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default PeopleTable;