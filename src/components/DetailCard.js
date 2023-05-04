import React from 'react'

export default function DetailCard({ userDetails }) {
  return (
    <div>
      <div>
        <h1>{userDetails.name}</h1>
        <h3>(@{userDetails.login})</h3>
      </div>
      <div>
        <div>
          <h1>{userDetails.public_repos}</h1>
          <h4>Public Repos</h4>
        </div>
        <div>
          <h1>{userDetails.public_gists}</h1>
          <h4>Public Gists</h4>
        </div>
        <div>
          <h1>{userDetails.followers}</h1>
          <h4>Followers</h4>
        </div>
        <div>
          <h1>{userDetails.following}</h1>
          <h4>Following</h4>
        </div>
      </div>
      <h5>
        <span>Biography:</span>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quae ipsam ipsum quia illum voluptatum exercitationem
        nobis. Harum vero enim, temporibus fugiat minus quo facilis eum velit
        impedit, laudantium, neque dicta.
      </h5>
      <h5><span>Company:</span>{userDetails.company}</h5>
      <h5><span>Twitter:</span>{userDetails.twitter_username}</h5>
    </div>
  )
}
