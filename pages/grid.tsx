import React, {useEffect, useState} from 'react';
import styles from "../styles/Home.module.css";

const CubeGrid = () => {
    const [cubes, setCubes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCube, setSelectedCube] = useState();
    const amount = 50;

    useEffect(() => {
        const grid = Array.from({length: amount}, (_, i) => {
            const randomNumber = Math.floor(Math.random() * 1000);
            let color;
            switch (true) {
                case randomNumber >= 900:
                    color = '#7f0000';
                    break;
                case randomNumber >= 800:
                    color = '#b22222';
                    break;
                case randomNumber >= 700:
                    color = '#8b0000';
                    break;
                case randomNumber >= 600:
                    color = '#ff4500';
                    break;
                case randomNumber >= 500:
                    color = '#ff8c00';
                    break;
                case randomNumber >= 400:
                    color = '#ffd700';
                    break;
                case randomNumber >= 300:
                    color = '#b8860b';
                    break;
                case randomNumber >= 200:
                    color = '#6b8e23';
                    break;
                case randomNumber >= 100:
                    color = '#556b2f';
                    break;
                default:
                    color = '#228b22';
            }

            return (
                <div
                    key={i}
                    className="cube"
                    title={randomNumber}
                    style={{backgroundColor: color}}
                    onClick={() => {
                        setIsOpen(true);
                        setSelectedCube(i);
                    }}
                >
                </div>
            );
        });
        setCubes(grid);
    }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div>
                    <div className="grid">{cubes}</div>
                    {isOpen && (
                        <div className="modal">
                            <div className="modal-content">
            <span
                className="close-button"
                onClick={() => {
                    setIsOpen(false);
                }}
            >
              &times;
            </span>
                                <p>You clicked on cube with value: {selectedCube}</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>

    );
};

export default CubeGrid;
