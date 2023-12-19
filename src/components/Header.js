const Header = ({ text }) => {
  const starPath = process.env.PUBLIC_URL + "/images/icon-star.svg"

  return (
    <div className="flex items-center">
      <div className="mr-4 mt-1">
        <img src={starPath} alt="beatiful star icon"/>
      </div>
      <h1 className="text-[#2F1533] font-bold text-5xl">{ text }</h1>
    </div>
  )
}

export default Header;
