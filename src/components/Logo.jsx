import React from 'react'

function Logo({width = '100px',
}) {
  return (
    <div>
      <img className="h-10 w-10 object-contain" src="https://api.deepai.org/job-view-file/dd9b7632-a166-478c-a2b3-cd4020d7406c/outputs/output.jpg?art-image=true" alt="Blog" />
    </div>
  )
}

export default Logo