import '../../styles/components/handWithSurprise.component.scss'
import React, {useState} from "react";

const Hand = () => {
    const [value, setValue] = useState(-1);

    const getSurprise = () => {
        switch (value) {
            case 1:
                return (
                    <img
                        className="dislike"
                        onClick={handleClick}
                        src='/assets/surprises/dislike.png'
                        width="205px"
                        height="225px"
                        alt="Surprise"
                    />
                )
            case 2:
                return (
                    <img
                        className="surprise"
                        onClick={handleClick}
                        src='/assets/surprises/amongus.gif'
                        width="205px"
                        height="225px"
                        alt="Surprise"
                    />
                )
            case 5:
                return (
                    <img
                        className="surprise"
                        onClick={handleClick}
                        src='/assets/surprises/5.gif'
                        width="205px"
                        height="225px"
                        alt="Surprise"
                    />
                )
            case 6:
                return (
                    <img
                        className="surprise"
                        onClick={handleClick}
                        src='/assets/surprises/6.gif'
                        width="500px"
                        height="225px"
                        alt="Surprise"
                    />
                )
            case 7:
                return (
                    <img
                        className="surprise"
                        onClick={handleClick}
                        src='/assets/surprises/7.gif'
                        width="300px"
                        height="225px"
                        alt="Surprise"
                    />
                )
            default:
                return (
                    <img
                        className="surprise"
                        onClick={handleClick}
                        src={`/assets/surprises/${value}.png`}
                        width="205px"
                        height="225px"
                        alt="Surprise"
                    />
                )
        }
    }

    const handleClick = () => {
        const min = 1;
        const max = 8;

        if(value === -1)
            setValue(Math.floor(Math.random() * (max - min + 1) + min));
        else
            setValue(-1)
    }

    return (
        <>
            {value !== -1 ? (
                getSurprise()
            ) : (
                <div onClick={handleClick} className="emoji">
                    👋
                </div>
            )}
        </>
    );
}

export default Hand;
