import React, {useState} from 'react';
import "./LandingPage.css";
import Title from "../../components/Title/Title";
import MovieCard from "../../components/MovieCard/MovieCard";
import QuestionProgress from "../../components/QuestionProgress/QuestionProgress";
import Card from "../../components/Card/Card";

const Questions = ({currentQuestionIndex, questionData, options, question, handleOption}) => {
    return (
        <div className="content-wrapper">
            <QuestionProgress currentStep={currentQuestionIndex + 1} totalSteps={questionData.length}/>
            <Title text={question}/>
            <div className="movie-cards">
                {options.map(({title, image}, index) => (
                    <MovieCard key={title} title={title} image={image} index={index} onClick={handleOption}/>
                ))}
            </div>
        </div>
    )
}

const ResultCard = ({handleWatchClick}) => {
    return (
        <div className="content-wrapper">
            <Card
                title={"WATCH NEW MOVIES FOR FREE!"}
                description={["Watch any movies online for free without ads!", "Have fun watching your favourite movies!"]}
                label={"WATCH HERE!"} onClick={handleWatchClick}
            />
        </div>
    )
}

function LandingPage({questionData}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleOption = (movieIndex) => {
        setSelectedMovie(movieIndex)
        if (currentQuestionIndex < questionData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        if (currentQuestionIndex === questionData.length - 1) setShowResult(true);
    };

    const handleWatchClick = () => {
        const movie = questionData[currentQuestionIndex].options[selectedMovie];
        window.open(movie.imdb, "_blank");
    }

    const {question, options} = questionData[currentQuestionIndex];

    return (
        <div className="landing-page">
            {showResult ? (
                <ResultCard handleWatchClick={handleWatchClick}/>
            ) : (
                <Questions
                    questionData={questionData}
                    currentQuestionIndex={currentQuestionIndex}
                    handleOption={handleOption}
                    options={options}
                    question={question}
                />
            )}
        </div>
    );
}

export default LandingPage;
