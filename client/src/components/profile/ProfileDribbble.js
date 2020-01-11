import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class ProfileDribbble extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientID: '68abf61f0bcb7c8c005538e1873ffe99b299d878ee0ad217a8c6f4e838430710',
            clientSecret: 'bdad68399377d2ac2afd17a35335662fa26bee9cb9859d15d203cc2b0a0f2152',
            count: 5,
            sort: 'created: asc',
            shots: []
        }
    }

    componentDidMount() {
        const {username} = this.props;
        const {count, sort, clientID, clientSecret} = this.state;
        const accessToken = '5baea724a80d1466e47645289238a87581a478ec93d7b437af84e36412568233'

        fetch(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}&per_page=${count}&client_id=${clientID}&client_secret=${clientSecret}`)
        .then(res => res.json())
        .then(data => {
            if(this.refs.myRef) {
                this.setState({
                    shots: data
                })
            }
        })
        .catch(err => console.log(err))
    }
    render() {
        const {shots} = this.state;

        const shotItems = shots.map((shot => (
            <div key={shot.id} className='card card-body mb-2'>
                <div className='row'>
                <div className='col-md-6'>
                        <span className='badge badge-info mr-1'>
                            <img src={shot.images.teaser} />
                        </span>
                    </div>
                    <div className='col-md-6'>
                        <h4>
                            <Link to={shot.html_url} className='text-info' target='_blank' rel="noopener noreferrer">
                                {shot.title}
                            </Link>
                        </h4>
                        <p>{shot.description}</p>
                    </div>

                </div>
            </div>
        )))
        return (
            <div ref='myRef'>
                <hr />
                <h3 className='mb-4'>Latest dribbble shots</h3>
                {shotItems}
            </div>
        )
    }
}

ProfileDribbble.propTypes = {
    username: PropTypes.string.isRequired
}

export default ProfileDribbble