import React, { useState, useEffect } from 'react';
import "./LandingPage.css";
import Title from "../../components/Title/Title";
import MovieCard from "../../components/MovieCard/MovieCard";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";
import Card from "../../components/Card/Card";

const Questions = ({ currentQuestionIndex, questionData, options, question, handleOption }) => {
    return (
        <div className="content-wrapper">
            <ProgressIndicator currentStep={currentQuestionIndex + 1} totalSteps={questionData.questions.length} label="QUESTION" />
            <Title text={question} />
            <div className="movie-cards">
                {options.map((option) => (
                    <MovieCard
                        index={option.id}
                        title={option.title}
                        image={option.image}
                        handleSelection={handleOption}
                    />
                ))}
            </div>
        </div>
    )
}

const ResultCard = ({handleWatchClick }) => {
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
    const [selectedMovie, setSelectedMovie] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [currentOptions, setCurrentOptions] = useState([]);

    useEffect(() => {
        const shuffledOptions = questionData.options.sort(() => Math.random() - 0.5);
        setCurrentOptions(shuffledOptions.slice(0, 3));
    }, []);

    const { questions, options } = questionData;

    const handleOption = (movieId) => {
        const movie = currentOptions.find(option => option.id === movieId);
        setSelectedMovie(movie)
        if (currentQuestionIndex === questions.length - 1) {
            setShowResult(true);
        }
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            const nextOptions = movie.nextOptions.map(optionId => options.find(option => option.id === optionId));
            setCurrentOptions(nextOptions);
    };

    const handleWatchClick = () => {
        window.open(selectedMovie.imdb, "_blank");
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="landing-page">
            {showResult ? (
                <ResultCard handleWatchClick={handleWatchClick} />
            ) : (
                <Questions
                    questionData={questionData}
                    currentQuestionIndex={currentQuestionIndex}
                    handleOption={handleOption}
                    options={currentOptions}
                    question={currentQuestion}
                />
            )}
        </div>
    );
}

export default LandingPage;
