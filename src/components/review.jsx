import React from 'react'

export default function Review({name,rate,review}) {
  return (
    <div className='review'>
    <span>Reviewed by <span className="name">{name}</span>   <span className='movie-rating'>{rate} /10</span></span>
    <h4>Exquisite</h4>
    <p>From the opening footage of 1950s London to the closing credits this is a simply exquisite film. Bill Nighy is perfect in the lead role of the senior civil servant who is forced to confront his own mortality and Amy Lou Wood and Alex Sharp provide fine support at the other end of the age spectrum. There are some lovely scenes all played with understated panache and whilst the storyline is undoubtedly a little sad the film leaves the viewer appreciative of what's really important in life. It also achieves this in an understated, non preachy and gentle tone. There's also a fine soundtrack throughout and a lovely final scene to round it all off.</p>
  </div>
  )
}
