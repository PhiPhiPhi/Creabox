import React, { Component } from 'react'

class ProfileHeader extends Component {
    render() {
        const {profile} = this.props;

        return (
            <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-info text-white mb-3">
                <div className="row">
                  <div className="col-4 col-md-3 m-auto">
                    <img className="rounded-circle" src={profile.user.avatar} alt="" />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="display-4 text-center">{profile.user.name}</h1>
        <p className="lead text-center"> {profile.status} at {profile.company ? (<span>{profile.company}</span>) : null }</p>
                  <p>{profile.location ? (<span>{profile.location}</span>) : null }</p>
                  <p>
                  {profile.website ? (<a className="text-white p-2" href={`https://${profile.website}`} target='_blank'><i className="fa fa-globe fa-2x"></i></a>) : null }
                  {(profile.social && profile.social.twitter) ? (<a className="text-white p-2" href={`https://${profile.social.twitter}`} target='_blank'><i className="fa fa-twitter fa-2x"></i></a>) : null }
                  {(profile.social && profile.social.facebook) ? (<a className="text-white p-2" href={`https://${profile.social.facebook}`} target='_blank'><i className="fa fa-facebook fa-2x"></i></a>) : null }
                  {(profile.social && profile.social.linkedin) ? (<a className="text-white p-2" href={`https://${profile.social.linkedin}`} target='_blank'><i className="fa fa-linkedin fa-2x"></i></a>) : null }
                  {(profile.social && profile.social.instagram) ? (<a className="text-white p-2" href={`https://${profile.social.instagram}`} target='_blank'><i className="fa fa-instagram fa-2x"></i></a>) : null }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ProfileHeader