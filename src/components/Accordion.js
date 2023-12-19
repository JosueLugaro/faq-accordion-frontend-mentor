import { useState } from "react"

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false)
  const plusIcon = process.env.PUBLIC_URL + "/images/icon-plus.svg"
  const minusIcon = process.env.PUBLIC_URL + "/images/icon-minus.svg"

  function handleOpenCloseClick() {
    setOpen(!open)
  }

  return (
    <div>
      <div onClick={handleOpenCloseClick} className="flex items-center justify-between">
        <h1>{ title }</h1>
        <img src={open ? minusIcon : plusIcon} alt="open or minus icon"/>
      </div>
      { open && (
          <div>
            <p>{ content }</p>
          </div>
        )
      }
    </div>
  )
}

export default Accordion