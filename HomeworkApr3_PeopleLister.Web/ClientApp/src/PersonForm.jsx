import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type='text'
                            onChange={this.props.onTextboxChange}
                            value={this.props.currentPerson.firstName}
                            className='form-control'
                            placeholder='First Name' />
                    </div>
                    <div className='col-md-3'>
                        <input type='text'
                            onChange={this.props.onTextboxChange}
                            value={this.props.currentPerson.lastName}
                            className='form-control'
                            placeholder='Last Name' />
                    </div>
                    <div className='col-md-3'>
                        <input type='text'
                            onChange={this.props.onTextboxChange}
                            value={this.props.currentPerson.age}
                            className='form-control'
                            placeholder='Age' />
                    </div>
                    <div className='col-md-1'>
                        <button className='btn btn-outline-info w-100'
                            onClick={this.props.onAddClick}>Add</button>
                    </div>
                    <div className='col-md-1'>
                        <button className='btn btn-outline-warning w-100'
                            onClick={this.props.onClearClick}>Clear All</button>
                    </div>
                </div>
            </>

        )
    }
}

export default PersonForm;