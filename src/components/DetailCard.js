import React from 'react'

export default function DetailCard({ userDetails }) {
  let twitterURL = `https://www.twitter.com/${userDetails.twitter_username}`

  return (
    <div className='card grid grid-cols-1 lg:grid-cols-2 mx-10 md:mx-36 2xl:mx-72 my-10 p-5 lg:p-10 gap-x-2'>
      <div className='flex-col-ctr text-center p-2 gap-y-4'>
        <div>
          <img
            src={userDetails.avatar_url}
            alt={userDetails.name}
            className='object-fill w-36 lg:w-72 2xl:w-80 rounded-full border-8 border-stone-800'
          />
          <h1 className='mt-4 font-bold text-2xl'>
            {/* if no full name listed, list username */}
            {userDetails.name === null ? userDetails.login : userDetails.name}
          </h1>
          <h3 className='italic'>(@{userDetails.login})</h3>
        </div>
        <div>
          <h3>{userDetails.location === null ? '' : userDetails.location}</h3>
          {userDetails.blog === null ? (
            ''
          ) : (
            <a
              href={userDetails.blog}
              className='link underline text-green-300 ml-1'
            >{userDetails.blog}
            </a>
          )}
        </div>
      </div>
      <div className='flex flex-col items-center mt-8 lg:mt-0 lg:items-start gap-y-2 lg:gap-y-4'>
        <div className='flex gap-x-2 xl:gap-x-10 mb-4 lg:mb-16'>
          <div className='text-center'>
            <h1 className='text-4xl'>{userDetails.public_repos}</h1>
            <h4>Public Repos</h4>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl'>{userDetails.public_gists}</h1>
            <h4>Public Gists</h4>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl'>{userDetails.followers}</h1>
            <h4>Followers</h4>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl'>{userDetails.following}</h1>
            <h4>Following</h4>
          </div>
        </div>
        <h5 className='italic text-center lg:text-left'>
          <span className='font-bold not-italic'>Biography: </span>
          {userDetails.bio === null
            ? `Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`
            : `${userDetails.bio}`}
        </h5>
        <h5 className='italic'>
          <span className='font-bold not-italic'>Company: </span>
          {userDetails.company === null ? 'N/A' : userDetails.company}
        </h5>
        <div className='italic flex-row-ctr'>
          <h5>
            <span className='font-bold'>Twitter:</span>
          </h5>
          {userDetails.twitter_username === null ? (
            <h5> N/A</h5>
          ) : (
            <a href={twitterURL} className='link underline text-green-300'>
              <h3 className='ml-1'>@{userDetails.twitter_username}</h3>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
