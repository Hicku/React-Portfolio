import React from 'react'
import "./ImgLink.css"
import moviesImg from "../../Utils/Images/Movies.png"
import plannerImg from"../../Utils/Images/Planner.png"
import quizImg from "../../Utils/Images/Quiz.png"
import footballImg from "../../Utils/Images/Football.png"
import weatherImg from "../../Utils/Images/weather-API.png"

const ImgLink = () => {

    // Work array
const workArr = [
    {
      title: "Weather API",
      description: "Weather API for retrieving weather data on any city.",
      image: weatherImg,
      gitUrl: "https://github.com/Hicku/Weather-API",
      deployedUrl: "https://hicku.github.io/Weather-API/",
    },
    {
        title: "LudicrousDisplay",
        description: "An app that enables the user to search for a football team in the premier league and see their fixtures for the current season. User is able to see statistics for each match, if it has already been played. They can also an exerpt from wikipedia for each team.",
        image: footballImg,
        gitUrl: "https://github.com/philiptart/projectLudicrousDisplay",
        deployedUrl: "https://philiptart.github.io/projectLudicrousDisplay",
      },
      {
        title: "The Movie SQL",
        description: "This is a movie search engine that allows the user to login, authenticate their login and then search the name of a movie. This program will display the searched movie using third party APIs to fetch the data and allow users to add/update/view/delete reviews on the movie.",
        image: moviesImg,
        gitUrl: "https://github.com/Iman-Jama/movie-part2",
        deployedUrl: "https://the-movie-sequel.herokuapp.com/",
      },
      {
        title: "Planner",
        description: "A planner for planning your day hour by hour.",
        image: plannerImg,
        gitUrl: "https://github.com/Hicku/Planner",
        deployedUrl: "https://hicku.github.io/Planner/",
      },
      {
        title: "Quiz",
        description: "A multiple choice quiz with questions on basic Jaascript. You will start with 100 seconds. Each each question will present four answers for you to choose from",
        image: quizImg,
        gitUrl: "https://github.com/Hicku/Quiz",
        deployedUrl: "https://hicku.github.io/Quiz/",
      },
    
  ];
  

  return (
    <div className='mainContainer'>
        <ul className='imgsContainer'>
            {workArr.map(work  => {
                return <li className='imgContainer'>
                    <h3 className='portTitle'>
                        {work.title}
                    </h3>
                    <img className="portImg" src={work.image}></img>
                </li>
            
            })}
        </ul>     
    </div>
  )
}

export default ImgLink
